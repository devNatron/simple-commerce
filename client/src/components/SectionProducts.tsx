import styles from '../styles/components/SectionProducts.module.css'
import { Product } from './Product'

export function SectionProducts(){
    return(
        <div className={styles.container}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}