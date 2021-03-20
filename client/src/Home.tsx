import React from 'react'

import { Form } from './components/Form';
import { Header } from './components/Header';
import { SectionProducts } from './components/SectionProducts';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import styles from './styles/pages/Home.module.css'

function Home() {
  return (
    <ShoppingCartProvider>
      <Header/>
      <div className={styles.container}>
        <ShoppingCart/>
        <SectionProducts/>
        <Form/>
      </div>
    </ShoppingCartProvider>
  );
}

export default Home;
