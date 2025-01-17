import { Instagram, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-beige-100 py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
          <div className="flex gap-6 mb-8">
            <a
              href="https://instagram.com/damyw.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@damyw.ma</span>
            </a>
            <a
              href="https://damyw.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors"
            >
              <Globe className="w-6 h-6" />
              <span>damyw.ma</span>
            </a>
          </div>
          <p className="text-gray-600">
            © {new Date().getFullYear()} DAMY-W. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};