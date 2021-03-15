import styles from '../styles/components/Product.module.css'

export function Product(){
    return(
        <div className={styles.product}>
            <img 
                //src="https://source.unsplash.com/random/800x600" 
                src="/images/minions/minion_1_img1.webp" 
                alt="minion"
                className={styles.imagem}
            />
            <div className={styles.descripton}>
                <h2>Minion</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde maxime excepturi.
                </p>
            </div>
        </div>
    )
}