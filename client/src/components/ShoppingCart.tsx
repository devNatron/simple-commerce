import styles from '../styles/components/ShoppingCart.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useContext } from 'react'

export function ShoppingCart(){
    const {numberSelectedProducts} = useContext(ShoppingCartContext)

    return(
        <div className={styles.ShoppingCart}>
            <div className={styles.numberProducts}>
                {numberSelectedProducts}
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
        </div>
    )
}