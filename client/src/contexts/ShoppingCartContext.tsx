import React, {createContext, ReactNode, useState} from 'react'

import {ProductProps} from '../components/Product'
import { ShoppingCartModal } from '../components/ShoppingCartModal';

import axios from 'axios'

const MAILER_URL = process.env.REACT_APP_MAILER_URL

type ShoppingCartContextProps = {
    numberSelectedProducts: number,
    cartProducts: ShoppingCartProductProps[],
    addProductToCart: (product: ShoppingCartProductProps) => void,
    removeProductToCart: (id: number) => void,
    increaseProductInCart: (id: number) => boolean,
    decreaseProductInCart: (id: number) => boolean,
    openCartModal: () => void,
    closeCartModal: () => void,
    checkOut: (nome: string, email: string) => void,
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

export type ShoppingCartProductProps = ProductProps & {
    amount: number,
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [numberSelectedProducts, setNumberSelectedProducts] = useState(0)
    const [cartProducts, setProduct] = useState<ShoppingCartProductProps[]>([])
    const [isCartModalOpen, setCartModalOpen] = useState(false)

    function addProductToCart(product: ShoppingCartProductProps){
        const inCart = increaseProductInCart(product.id)

        //caso o produto não esteja no carrinho, insere no carrinho
        if(!inCart){
            const newCartProduct: ShoppingCartProductProps = {...product}

            newCartProduct.amount = 1;
            setProduct([...cartProducts, newCartProduct])
            
            setNumberSelectedProducts(numberSelectedProducts + 1)
        }
    }

    function removeProductToCart(productId: number){
        let amount = 0

        cartProducts.forEach(({id}, index: number) => {
            if(id === productId){
                amount = cartProducts[index].amount
                delete cartProducts[index]
            }
        })

        setNumberSelectedProducts(numberSelectedProducts - amount)
    }

    function increaseProductInCart(productId: number){
        let inCart = false

        cartProducts.forEach(({id}, index: number) => {
            if(id === productId){

                if(cartProducts[index].amount >= 99){
                    cartProducts[index].amount = 99
                }
                else{
                    cartProducts[index].amount += 1
                    setNumberSelectedProducts(numberSelectedProducts + 1)
                }
                
                inCart = true;
            }
        })

        return inCart
    }

    function decreaseProductInCart(productId: number){
        let inCart = false

        cartProducts.forEach(({id}, index: number) => {
            if(id === productId){
                
                if(cartProducts[index].amount <= 1){
                    cartProducts[index].amount = 1
                }
                else{
                    cartProducts[index].amount -= 1
                    setNumberSelectedProducts(numberSelectedProducts - 1)
                }

                inCart = true;
            }
        })

        return inCart
    }

    async function checkOut(nome: string, email: string){
        const data = {
            clientEmail: email,
            subject: "[Minions Store] - Pedido realizado com sucesso!",
            text: "vlw por comprar parceiro!",
        }

        await axios.post(MAILER_URL!, data)
        .then(res => {
            console.log(JSON.stringify(res))
        })
        .catch(res => {
            console.log(JSON.stringify(res))
        })
    }

    function openCartModal(){
        setCartModalOpen(true)
    }

    function closeCartModal(){
        setCartModalOpen(false)
    }

    return(
        <ShoppingCartContext.Provider value={{
            numberSelectedProducts,
            cartProducts,
            addProductToCart,
            removeProductToCart,
            increaseProductInCart,
            decreaseProductInCart,
            openCartModal,
            closeCartModal,
            checkOut,
        }}>
            {children}
            {isCartModalOpen && <ShoppingCartModal/>}
        </ShoppingCartContext.Provider>
    )
}