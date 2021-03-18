import styles from '../styles/components/ShoppingCartModal.module.css'
import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons' 
import { ShoppingCartContext, ShoppingCartProductProps } from '../contexts/ShoppingCartContext'

export function ShoppingCartModal(){
    const {closeCartModal, cartProducts, increaseProductInCart, decreaseProductInCart, removeProductInCart, numberSelectedProducts} = useContext(ShoppingCartContext)
    
    function closeCart(){
        closeCartModal()
    }

    function hundleIncrease(id: number){
        increaseProductInCart(id)
    }

    function hundleDecrease(id: number){
        decreaseProductInCart(id)
    }

    function removeProduct(id: number){
        removeProductInCart(id)
    }

    return(
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>
                    <h2>Carrinho</h2>
                    <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
                </header>
                { numberSelectedProducts <= 0 ? <div>Vazio</div> : 
                    <div className={styles.cartContainer}>
                        {cartProducts.map(({id, title, amount, price, image}: ShoppingCartProductProps, index: number)=>{
                            return (
                                <div className={styles.item} key={index}>
                                    <img src={image[0]} alt="Imagem ilustrativa do produto"/>
                                    <p className={styles.productName}>{title}</p>
                                    <p className={styles.productPrice}>{(price * amount).toFixed(2)} R$</p>
                                    <div className={styles.amountBox}>
                                        <p>
                                            <button onClick={()=>hundleDecrease(id)}>
                                                <FontAwesomeIcon icon={faMinus} className={styles.icon}/>
                                            </button>
                                            {amount}
                                            <button onClick={()=>hundleIncrease(id)}>
                                                <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                                            </button>
                                        </p>
                                    </div>
                                    <button onClick={()=>removeProduct(id)} className={styles.removeProductButton}>
                                        <FontAwesomeIcon icon={faTimesCircle} className={styles.icon}/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                }
                <button type="button" onClick={closeCart} className={styles.closeButton}>
                    <FontAwesomeIcon icon={faTimes} className={styles.icon}/>
                </button>
            </div>
        </div>
    )
}