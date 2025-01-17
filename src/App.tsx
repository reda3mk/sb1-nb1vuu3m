import React from 'react';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;