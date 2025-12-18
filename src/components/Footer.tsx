import { MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl mb-4">Floating Sauna</h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              Riva del Garda
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">{t.footer.location}</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm">
                Porto San Nicolò<br />
                38066 Riva del Garda (TN)<br />
                Italy
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">{t.footer.contact}</h4>
            <div className="space-y-3 text-primary-foreground/70">
              <a href="mailto:info@floatingsauna.it" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                <Mail size={18} />
                <span className="font-body text-sm">info@floatingsauna.it</span>
              </a>
              <a href="tel:+39123456789" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                <Phone size={18} />
                <span className="font-body text-sm">+39 123 456 789</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Floating Sauna. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};
