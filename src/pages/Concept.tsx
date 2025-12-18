import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Waves, Mountain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import heroImage from '@/assets/hero-sauna.jpg';

const Concept = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Flame,
      title: t.concept.feature1Title,
      description: t.concept.feature1Desc,
    },
    {
      icon: Waves,
      title: t.concept.feature2Title,
      description: t.concept.feature2Desc,
    },
    {
      icon: Mountain,
      title: t.concept.feature3Title,
      description: t.concept.feature3Desc,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Floating Sauna"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 font-heading text-5xl md:text-6xl text-background"
          >
            {t.concept.title}
          </motion.h1>
        </section>

        {/* Content */}
        <section ref={ref} className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center font-body text-lg text-muted-foreground leading-relaxed mb-20"
            >
              {t.concept.description}
            </motion.p>

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                    <feature.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Concept;
