import styles from '../styles/components/Form.module.css'
import React, { useContext, useEffect } from 'react'
import {Element} from 'react-scroll'

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

export function Form(){
    const {checkOut, numberSelectedProducts} = useContext(ShoppingCartContext)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault();

        const form = new FormData(e.target as HTMLFormElement)
        
        const nome = String(form.get('nome'))
        const email = String(form.get('email'))
        const observations = String(form.get('observations'))

        if(!nome || !email){
            if(Notification.permission === 'granted'){
                new Notification('Campos faltantes', {
                    body: `Os campos ${nome ? "": "nome"}${email ? "": ",email"} não estão preenchidos!`
                })
            }
            return
        }

        if(numberSelectedProducts === 0){
            if(Notification.permission === 'granted'){
                new Notification('Nenhum produto selecionado', {
                    body: `Nenhum produto foi selecionado`
                })
            }
            return
        }

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
                    >
                        Enviar Pedido
                    </button>
                </form>
            </div>
    )
}