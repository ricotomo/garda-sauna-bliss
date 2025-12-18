import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import exterior1 from '@/assets/exterior-1.jpg';
import exterior2 from '@/assets/exterior-2.jpg';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import heroImage from '@/assets/hero-sauna.jpg';

type GalleryTab = 'exterior' | 'interior';

const images = {
  exterior: [
    { src: exterior1, alt: 'Floating sauna exterior with deck' },
    { src: exterior2, alt: 'Aerial view of floating sauna' },
    { src: heroImage, alt: 'Floating sauna panoramic view' },
  ],
  interior: [
    { src: interior1, alt: 'Sauna interior with lake view' },
    { src: interior2, alt: 'Sauna accessories and details' },
  ],
};

const Gallery = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<GalleryTab>('exterior');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-6xl text-foreground text-center mb-8"
            >
              {t.gallery.title}
            </motion.h1>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center gap-8"
            >
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
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {images[activeTab].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="aspect-[4/3] overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
