import React, { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import styles from '../styles/components/OrderModal.module.css'
import { Modal } from './Modal'

export function OrderModal(){
    const {closeOrderModal} = useContext(ShoppingCartContext)

    function HandleCloseOrderModal(){
        closeOrderModal()
    }

    return(
        <Modal closeModal={HandleCloseOrderModal}>
            <div className={styles.orderModalWrapper}>
                <header className={styles.orderModalHeader}>
                    <p>
                        Finalização do Pedido
                    </p>
                </header>
                <div className={styles.resultWrapper}>
                    <p>
                        <img src="https://media.giphy.com/media/0biEvQXqdJFMmOIN5m/giphy.gif" alt="" className={styles.minionGif}/>
                        Pedido Realizado com sucesso!
                        <img src="https://media.giphy.com/media/0biEvQXqdJFMmOIN5m/giphy.gif" alt="" className={styles.minionGif}/>
                    </p>
                    <p>
                        verifique sua caixa de email 📧  
                    </p>
                </div>
            </div>
        </Modal>
    )
} 