import styles from '../styles/components/ShoppingCart.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useContext } from 'react'

export function ShoppingCart(){
    const {numberSelectedProducts, openCartModal} = useContext(ShoppingCartContext)

    function openCart(){
        openCartModal()
    }

    return(
        <div className={styles.ShoppingCart} onClick={openCart}>
            <div className={styles.numberProducts}>
                {numberSelectedProducts}
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
        </div>
    )
}