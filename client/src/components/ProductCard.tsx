import React, { useContext } from 'react'
import { ShoppingCartContext, ShoppingCartProductProps } from '../contexts/ShoppingCartContext'
import styles from '../styles/components/ProductCard.module.css'

export type ProductProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string[],
}

export function ProductCard(props: ProductProps){
    const {addProductToCart} = useContext(ShoppingCartContext)
    
    function handleClick(){
        addProductToCart(props as ShoppingCartProductProps)
    }

    return(
        <div className={styles.product}>
            <img 
                src={props.image[0]} 
                onClick={handleClick}
                className={styles.imagem}
                alt="Imagem ilustrativa do produto"
            />
            <div className={styles.productInfo}>
                <h2>
                    {props.title}
                </h2>
                <p className={styles.descripton}>
                    {props.description}
                </p>
                <div className={styles.priceBox}>
                    <p>R$ {props.price}</p>
                    <button onClick={handleClick}>
                        adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}