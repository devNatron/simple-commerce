import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../styles/components/Modal.module.css'

type ModalProps = {
    children : React.ReactNode,
    closeModal: () => void
}
//React.FC<Props>
export function Modal({children, closeModal}: ModalProps){
    return(
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <button type="button" onClick={closeModal} className={styles.closeButton}>
                    <FontAwesomeIcon icon={faTimes} className={styles.icon}/>
                </button>
                {children}
            </div>
        </div>
    )
}