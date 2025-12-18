import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ConceptSection } from '@/components/ConceptSection';
import { GallerySection } from '@/components/GallerySection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
