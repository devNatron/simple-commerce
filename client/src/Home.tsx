import React from 'react';
import { SectionProducts } from './components/SectionProducts';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import styles from './styles/pages/Home.module.css'


function Home() {
  return (
    <ShoppingCartProvider>
      <div className={styles.container}>
        <ShoppingCart/>
        <SectionProducts/>
      </div>
    </ShoppingCartProvider>
  );
}

export default Home;
