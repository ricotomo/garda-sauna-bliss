import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import exterior1 from '@/assets/exterior-1.jpg';
import exterior2 from '@/assets/exterior-2.jpg';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';

type GalleryTab = 'exterior' | 'interior';

const images = {
  exterior: [
    { src: exterior1, alt: 'Floating sauna exterior with deck' },
    { src: exterior2, alt: 'Aerial view of floating sauna' },
  ],
  interior: [
    { src: interior1, alt: 'Sauna interior with lake view' },
    { src: interior2, alt: 'Sauna accessories and details' },
  ],
};

export const GallerySection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<GalleryTab>('exterior');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            {t.gallery.title}
          </h2>
          
          {/* Tabs */}
          <div className="inline-flex gap-8">
            <button
              onClick={() => setActiveTab('exterior')}
              className={`font-body text-sm tracking-widest uppercase transition-colors ${
                activeTab === 'exterior' 
                  ? 'text-foreground border-b-2 border-foreground pb-1' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.gallery.exterior}
            </button>
            <button
              onClick={() => setActiveTab('interior')}
              className={`font-body text-sm tracking-widest uppercase transition-colors ${
                activeTab === 'interior' 
                  ? 'text-foreground border-b-2 border-foreground pb-1' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.gallery.interior}
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {images[activeTab].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
