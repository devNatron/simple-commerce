import styles from '../styles/components/ShoppingCartModal.module.css'
import React, { useContext } from 'react'
import {scroller} from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons' 

import { ShoppingCartContext, ShoppingCartProductProps } from '../contexts/ShoppingCartContext'
import { Modal } from './Modal'

export function ShoppingCartModal(){
    const {closeCartModal, cartProducts, increaseProductInCart, decreaseProductInCart, removeProductInCart, numberSelectedProducts} = useContext(ShoppingCartContext)
    
    let totalPrice = 0

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

    function scrollToForm(){
        closeCart()

        scroller.scrollTo('Form', {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50,
        })
    }

    return(
        <Modal closeModal={closeCart}>
            <div className={styles.modalWrapper}>
                <header className={styles.modalHeader}>
                    <h2>Carrinho</h2>
                    <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
                </header>
                { numberSelectedProducts <= 0 ? <div>Vazio</div> : 
                    <div className={styles.cartContainer}>
                        {cartProducts.map(({id, title, amount, price, image}: ShoppingCartProductProps, index: number)=>{
                            {totalPrice += price * amount}
                            return (
                                <div className={styles.item} key={index}>
                                    <img src={image[0]} alt="Imagem ilustrativa do produto"/>
                                    <p className={styles.productName}>{title}</p>
                                    <p className={styles.productPrice}>R$ {(price * amount).toFixed(2)}</p>
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
                        <div className={styles.totalOrder}>
                            <p>Total: R$ {totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                }
                { numberSelectedProducts > 0 &&
                    <button onClick={scrollToForm} className={styles.scrollToCheckOut}>
                        Ir enviar pedido
                    </button>
                }
            </div>
        </Modal>
    )
}