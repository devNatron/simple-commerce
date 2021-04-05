import React from 'react'
import { Form } from './components/Form';
import { Header } from './components/Header';
import { SectionProducts } from './components/SectionProducts';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import styles from './styles/pages/Home.module.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function Home() {
  return (
    <ShoppingCartProvider>
      <ReactNotification />
      <Header/>
      <ShoppingCart/>
      <div className={styles.container}>
        <SectionProducts/>
        <Form/>
      </div>
    </ShoppingCartProvider>
  );
}

export default Home;
