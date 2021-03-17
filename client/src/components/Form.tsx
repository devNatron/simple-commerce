import styles from '../styles/components/Form.module.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

export function Form(){
    const {checkOut} = useContext(ShoppingCartContext)

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target
        const fields = form.elements
        checkOut(fields.nome.value, fields.email.value)
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