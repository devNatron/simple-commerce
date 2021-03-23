import React, { useContext, useEffect, useState } from 'react'

import styles from '../styles/components/ShoppingCart.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

export function ShoppingCart(){
    const {numberSelectedProducts, isCartModalOpen, openCartModal} = useContext(ShoppingCartContext)
    const [addProductEffect, setAddProductEffect] = useState(false)

    function openCart(){
        openCartModal()
    }

    useEffect(() => {
        if(numberSelectedProducts <= 0)
            return
            
        setAddProductEffect(true)
        setTimeout(() => {
            setAddProductEffect(false)
        }, 500);
    }, [numberSelectedProducts])

    return(
        <div className={styles.ShoppingCartContainer}>
            {!isCartModalOpen &&
                <div className={`${styles.ShoppingCart} ${addProductEffect ? styles.ProductEffect : null}`} onClick={openCart}>
                    <div className={`${styles.numberProducts}`}>
                        {numberSelectedProducts}
                    </div>
                    <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
                </div>
            }
        </div>
    )
}