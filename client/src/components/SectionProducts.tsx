import styles from '../styles/components/SectionProducts.module.css'
import { Product } from './Product'

export function SectionProducts(){
    return(
        <div className={styles.container}>
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
            <Product 
                id={Math.random() * (10 - 0) + 0}
                title="Minion"
                value={2.39}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi."
                image="/images/minions/minion_1_img1.webp"
            />
        </div>
    )
}