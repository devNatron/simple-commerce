import styles from '../styles/components/Form.module.css'

export function Form(){

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target
        const fields = form.elements
        console.log(fields.Email.value)
    }

    return(
        <div className={styles.FormContainer}>
            <header>
                <h2>Finalizar Pedido</h2>
            </header>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Nome" id="inputName" placeholder="Nome"/>
                <input type="email" name="Email" id="inputEmail" placeholder="E-mail"/>
                <button 
                    type="submit"
                >
                    Fazer Pedido
                </button>
            </form>
        </div>
    )
}