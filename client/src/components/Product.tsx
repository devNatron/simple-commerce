import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import styles from '../styles/components/Product.module.css'

export type ProductProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string[],
}

export function Product(props: ProductProps){
    const {addProductToCart} = useContext(ShoppingCartContext)
    
    function handleClick(e){
        addProductToCart(props)
    }

    return(
        <div className={styles.product}>
            <img 
                src={props.image[0]} 
                className={styles.imagem}
                onClick={handleClick}
            />
            <div className={styles.descripton}>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}