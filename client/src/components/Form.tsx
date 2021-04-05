import styles from '../styles/components/Form.module.css'
import React, { useContext, useEffect, useState } from 'react'
import {Element} from 'react-scroll'

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

import { store } from 'react-notifications-component';

export function Form(){
    const {checkOut, numberSelectedProducts} = useContext(ShoppingCartContext)

    const [submitIsWrong, setSubmitIsWrong] = useState(false)
    const [submitIsRight, setSubmitIsRight] = useState(false)
    
    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        if(submitIsWrong || submitIsRight){
            setTimeout(() => {
                setSubmitIsWrong(false)
                setSubmitIsRight(false)
            }, 500);
        }
    }, [submitIsWrong, submitIsRight])

    function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault();

        const form = new FormData(e.target as HTMLFormElement)
        
        const nome = String(form.get('nome'))
        const email = String(form.get('email'))
        const observations = String(form.get('observations'))

        if(!nome || !email){
            setSubmitIsWrong(true)
            store.addNotification({
                title: "Campos faltantes!",
                message: `Os campos ${nome ? "": "nome"}${email ? "": ",email"} não estão preenchidos!`,
                type: "warning",
                insert: "top",
                container: "top-left",
                dismiss: {
                  duration: 5000,
                  onScreen: true
                },
                width: 300
            });
            return
        }

        if(numberSelectedProducts === 0){
            if(Notification.permission === 'granted'){
                new Notification('', {
                    body: ``
                })
            }
            setSubmitIsWrong(true)
            store.addNotification({
                title: "Nenhum produto selecionado!",
                message: `Selecione pelo menos um produto para realizar o pedido!`,
                type: "warning",
                insert: "top",
                container: "top-left",
                dismiss: {
                  duration: 5000,
                  onScreen: true
                },
                width: 300
            });
            return
        }
        setSubmitIsRight(true)
        checkOut(nome, email, observations)
    }

    return(
            <div className={styles.FormContainer}>
                <Element name='Form'></Element>
                <header>
                    <h2>Finalizar Pedido</h2>
                </header>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nome" id="inputName" placeholder="Nome"/>
                    <input type="email" name="email" id="inputEmail" placeholder="E-mail"/>
                    <textarea className={styles.observations} name="observations" placeholder="Observações" cols={20} rows={5}></textarea>
                    <button 
                        type="submit"
                        className={`${submitIsWrong ? styles.submitWrong : null} ${submitIsRight ? styles.submitRight : null}`}
                    >
                        Enviar Pedido
                    </button>
                </form>
            </div>
    )
}