import React from 'react'
import Styles from '../styles/components/Header.module.css'

export function Header(){
    return(
        <header className={Styles.headerContainer}>
            <h1>
                Minions Store
                <img src="https://media.giphy.com/media/up2eblFDbgUFUPrIbI/giphy.gif" alt=""/>
            </h1>
        </header>
    )
}