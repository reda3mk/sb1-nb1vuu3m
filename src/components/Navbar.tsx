import { Watch, Link2, CircleDot, Phone, ShoppingCart } from 'lucide-react';

export const Navbar = () => {
  const scrollToSection = (category: string) => {
    const element = document.getElementById(category);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('montres')}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-beige-100 transition-all"
            >
              <Watch className="w-5 h-5 text-gold" />
              <span>Montres</span>
            </button>
            <button
              onClick={() => scrollToSection('bracelets')}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-beige-100 transition-all"
            >
              <Link2 className="w-5 h-5 text-gold" />
              <span>Bracelets</span>
            </button>
            <button
              onClick={() => scrollToSection('bagues')}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-beige-100 transition-all"
            >
              <CircleDot className="w-5 h-5 text-gold" />
              <span>Bagues</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-beige-100 transition-all"
            >
              <Phone className="w-5 h-5 text-gold" />
              <span>Contact</span>
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gold text-white rounded-full hover:bg-gold/90 transition-all">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">Panier (0)</span>
          </button>
        </div>
      </div>
    </nav>
  );
};