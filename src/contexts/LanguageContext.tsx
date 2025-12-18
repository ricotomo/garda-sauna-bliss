import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'it' | 'de';

interface Translations {
  nav: {
    home: string;
    concept: string;
    gallery: string;
    booking: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  concept: {
    title: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  gallery: {
    title: string;
    exterior: string;
    interior: string;
  };
  booking: {
    title: string;
    subtitle: string;
    duration: string;
    price: string;
    perPerson: string;
    selectDate: string;
    selectTime: string;
    guests: string;
    guest: string;
    book: string;
    total: string;
  };
  footer: {
    location: string;
    contact: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      concept: 'Concept',
      gallery: 'Gallery',
      booking: 'Booking',
    },
    hero: {
      title: 'Floating Sauna',
      subtitle: 'Experience tranquility on the waters of Lake Garda',
      cta: 'Book Your Session',
    },
    concept: {
      title: 'The Experience',
      description: 'Discover the unique sensation of floating on Lake Garda while enjoying an authentic Finnish sauna experience. Our floating sauna combines the healing power of heat with the serenity of being surrounded by the stunning Alpine scenery.',
      feature1Title: 'Authentic Finnish Sauna',
      feature1Desc: 'Traditional wood-heated sauna reaching optimal temperatures for a genuine Nordic wellness experience.',
      feature2Title: 'Lake Immersion',
      feature2Desc: 'Step directly from the heat into the refreshing crystal-clear waters of Lago di Garda.',
      feature3Title: 'Stunning Views',
      feature3Desc: 'Panoramic views of the Dolomites and the charming town of Riva del Garda.',
    },
    gallery: {
      title: 'Gallery',
      exterior: 'Exterior',
      interior: 'Interior',
    },
    booking: {
      title: 'Book Your Experience',
      subtitle: 'Reserve your private floating sauna session',
      duration: '50 minutes',
      price: '€30',
      perPerson: 'per person',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      guests: 'Guests',
      guest: 'guest',
      book: 'Book Now',
      total: 'Total',
    },
    footer: {
      location: 'Riva del Garda, Italy',
      contact: 'Contact Us',
      rights: 'All rights reserved',
    },
  },
  it: {
    nav: {
      home: 'Home',
      concept: 'Concetto',
      gallery: 'Galleria',
      booking: 'Prenota',
    },
    hero: {
      title: 'Sauna Galleggiante',
      subtitle: 'Vivi la tranquillità sulle acque del Lago di Garda',
      cta: 'Prenota la Tua Sessione',
    },
    concept: {
      title: "L'Esperienza",
      description: "Scopri la sensazione unica di galleggiare sul Lago di Garda mentre ti godi un'autentica esperienza di sauna finlandese. La nostra sauna galleggiante combina il potere curativo del calore con la serenità di essere circondati dallo splendido scenario alpino.",
      feature1Title: 'Autentica Sauna Finlandese',
      feature1Desc: 'Sauna tradizionale riscaldata a legna che raggiunge temperature ottimali per una genuina esperienza di benessere nordico.',
      feature2Title: 'Immersione nel Lago',
      feature2Desc: "Passa direttamente dal calore alle rinfrescanti acque cristalline del Lago di Garda.",
      feature3Title: 'Viste Mozzafiato',
      feature3Desc: 'Viste panoramiche sulle Dolomiti e sulla suggestiva città di Riva del Garda.',
    },
    gallery: {
      title: 'Galleria',
      exterior: 'Esterno',
      interior: 'Interno',
    },
    booking: {
      title: 'Prenota la Tua Esperienza',
      subtitle: 'Riserva la tua sessione privata nella sauna galleggiante',
      duration: '50 minuti',
      price: '€30',
      perPerson: 'a persona',
      selectDate: 'Seleziona Data',
      selectTime: 'Seleziona Orario',
      guests: 'Ospiti',
      guest: 'ospite',
      book: 'Prenota Ora',
      total: 'Totale',
    },
    footer: {
      location: 'Riva del Garda, Italia',
      contact: 'Contattaci',
      rights: 'Tutti i diritti riservati',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      concept: 'Konzept',
      gallery: 'Galerie',
      booking: 'Buchung',
    },
    hero: {
      title: 'Schwimmende Sauna',
      subtitle: 'Erleben Sie Ruhe auf dem Gardasee',
      cta: 'Jetzt Buchen',
    },
    concept: {
      title: 'Das Erlebnis',
      description: 'Entdecken Sie das einzigartige Gefühl, auf dem Gardasee zu schweben, während Sie ein authentisches finnisches Saunaerlebnis genießen. Unsere schwimmende Sauna verbindet die heilende Kraft der Wärme mit der Ruhe der atemberaubenden Alpenlandschaft.',
      feature1Title: 'Authentische Finnische Sauna',
      feature1Desc: 'Traditionelle holzbeheizte Sauna mit optimalen Temperaturen für ein echtes nordisches Wellness-Erlebnis.',
      feature2Title: 'Eintauchen in den See',
      feature2Desc: 'Steigen Sie direkt von der Hitze in das erfrischende, kristallklare Wasser des Gardasees.',
      feature3Title: 'Atemberaubende Aussicht',
      feature3Desc: 'Panoramablick auf die Dolomiten und die charmante Stadt Riva del Garda.',
    },
    gallery: {
      title: 'Galerie',
      exterior: 'Außen',
      interior: 'Innen',
    },
    booking: {
      title: 'Buchen Sie Ihr Erlebnis',
      subtitle: 'Reservieren Sie Ihre private Schwimmsauna-Sitzung',
      duration: '50 Minuten',
      price: '€30',
      perPerson: 'pro Person',
      selectDate: 'Datum Wählen',
      selectTime: 'Zeit Wählen',
      guests: 'Gäste',
      guest: 'Gast',
      book: 'Jetzt Buchen',
      total: 'Gesamt',
    },
    footer: {
      location: 'Riva del Garda, Italien',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
