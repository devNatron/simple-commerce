import styles from '../styles/components/Form.module.css'
import React, { useContext } from 'react'
import {Element} from 'react-scroll'

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

export function Form(){
    const {checkOut} = useContext(ShoppingCartContext)

    function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault();

        const form = new FormData(e.target as HTMLFormElement)
        
        const nome = String(form.get('nome'))
        const email = String(form.get('email'))
        const observations = String(form.get('observations'))

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