import styles from '../styles/components/SectionProducts.module.css'
import { Product } from './Product'

import products from '../examples/products'

export function SectionProducts(){
    return(
        <div className={styles.container}>
            {products.map(({id, title, price, description, images }, index) => {
                return (
                    <Product
                        key={index} 
                        id={id}
                        title={title}
                        price={Number(price)}
                        description={description}
                        image={images}
                    />
                )
            })}
        </div>
    )
}