import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Waves, Mountain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ConceptSection = () => {
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
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            {t.concept.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {t.concept.description}
          </p>
        </motion.div>

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
  );
};
