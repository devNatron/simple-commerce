import styles from '../styles/components/Form.module.css'
import React, { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

export function Form(){
    const {checkOut} = useContext(ShoppingCartContext)

    function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault();

        const form = new FormData(e.target as HTMLFormElement)
        
        const nome = String(form.get('nome'))
        const email = String(form.get('email'))

        checkOut(nome, email)
    }

    return(
        <div className={styles.FormContainer}>
            <header>
                <h2>Finalizar Pedido</h2>
            </header>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" id="inputName" placeholder="Nome"/>
                <input type="email" name="email" id="inputEmail" placeholder="E-mail"/>
                <button 
                    type="submit"
                >
                    Fazer Pedido
                </button>
            </form>
        </div>
    )
}