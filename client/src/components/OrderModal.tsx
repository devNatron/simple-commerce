import React, { useContext } from 'react'
import styles from '../styles/components/OrderModal.module.css'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { ShoppingCartContext } from '../contexts/ShoppingCartContext'
import { Modal } from './Modal'
import { OrderResult } from './OrderResult';

const gifSuccess = "https://media.giphy.com/media/0biEvQXqdJFMmOIN5m/giphy.gif"
const gifFail = "https://media.giphy.com/media/xJFUMgl6gUtVguQwfV/giphy.gif"

export function OrderModal(){
    const {closeOrderModal, isWaitingOrder, isSucceedOrder} = useContext(ShoppingCartContext)

    function HandleCloseOrderModal(){
        if(!isWaitingOrder)
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
                { isWaitingOrder ?
                    <Loader
                        type="ThreeDots"
                        color="#2E384D"
                        height={50}
                        width={50}
                    />
                : isSucceedOrder ?
                    <OrderResult 
                        textResult='Pedido realizado com sucesso!'
                        textNotice='Por favor, verifique sua caixa de email 📧'
                        gifUrl={gifSuccess}
                    />
                :
                    <OrderResult 
                        textResult='Não foi possivel realizar o pedido.'
                        textNotice='Por favor, tentar refazer o pedido.'
                        gifUrl={gifFail}
                    />
                }
            </div>
        </Modal>
    )
} 