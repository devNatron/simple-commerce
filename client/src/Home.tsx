import React from 'react';
import { SectionProducts } from './components/SectionProducts';
import styles from './styles/pages/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <SectionProducts/>
    </div>
  );
}

export default Home;
