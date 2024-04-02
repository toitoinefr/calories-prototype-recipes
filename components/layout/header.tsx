import React from 'react';
import { ModeToggle } from './toggle-mode';
import Link from 'next/link.js';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <nav className="shadow-lg mb-4">
      <div className="container mx-auto py-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-white font-bold text-xl">Calories Prototype</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <ModeToggle />
                  <Button asChild variant={'outline'}><Link href="/products">Produits</Link></Button>
                  <Button asChild variant={'outline'}><Link href="/categories">Catégories</Link></Button>
                  <Button asChild variant={'outline'}><Link href="/recipes">Recettes</Link></Button>
                  <Button asChild variant={'outline'}><Link href="/prototype">Prototype V0.1</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
