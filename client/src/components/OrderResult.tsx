import React from 'react'
import styles from '../styles/components/OrderResult.module.css'

type OrderResultProps = {
    textResult: string,
    textNotice: string,
    gifUrl: string,
}

export function OrderResult({textResult, textNotice, gifUrl}: OrderResultProps){
    return(
        <div className={styles.resultWrapper}>
            <p>
                <img src={gifUrl} alt="" className={styles.minionGif}/>
                {textResult}
                <img src={gifUrl} alt="" className={styles.minionGif}/>
            </p>
            <p>
                {textNotice}
            </p>
        </div>
    )
} 