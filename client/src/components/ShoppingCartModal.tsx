import styles from '../styles/components/ShoppingCartModal.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

export function ShoppingCartModal(){
    const {closeCartModal, cartProducts} = useContext(ShoppingCartContext)
    
    function closeCart(){
        closeCartModal()
    }

    return(
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>Carrinho</header>
                <div className={styles.cartContainer}>
                    {cartProducts.map(({title, amount})=>{
                        return (
                            <div className={styles.item}>
                                {title} {amount}
                            </div>
                        )
                    })}
                </div>
                <button type="button" onClick={closeCart}>
                    <FontAwesomeIcon icon={faTimes} className={styles.icon}/>
                </button>
            </div>
        </div>
    )
}