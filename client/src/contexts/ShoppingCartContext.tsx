import React, {createContext, ReactNode, useState} from 'react'

import {ProductProps} from '../components/ProductCard'
import { ShoppingCartModal } from '../components/ShoppingCartModal';

import axios from 'axios'
import { OrderModal } from '../components/OrderModal';

const MAILER_URL = process.env.REACT_APP_MAILER_URL

type ShoppingCartContextProps = {
    numberSelectedProducts: number,
    cartProducts: ShoppingCartProductProps[],
    isWaitingOrder: boolean,
    isSucceedOrder: boolean,
    addProductToCart: (product: ShoppingCartProductProps) => void,
    removeProductInCart: (id: number) => void,
    increaseProductInCart: (id: number) => boolean,
    decreaseProductInCart: (id: number) => boolean,
    openCartModal: () => void,
    closeCartModal: () => void,
    openOrderModal: () => void,
    closeOrderModal: () => void,
    checkOut: (nome: string, email: string, observations: string) => void,
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
    const [isOrderModalOpen, setOrderModalOpen] = useState(false)
    const [isWaitingOrder, setIsWaitingOrder] = useState(false)
    const [isSucceedOrder, setIsSucceedOrder] = useState(false)

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

    function removeProductInCart(productId: number){
        let amount = 0

        cartProducts.forEach(({id}, index: number) => {
            if(id === productId){
                amount = cartProducts[index].amount
                cartProducts.splice(index, 1)
                setProduct([...cartProducts])
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

    async function checkOut(nome: string, email: string, observations: string){
        let order : Omit<ShoppingCartProductProps, 'image'>[] = []

        order = cartProducts.map(product => {
            const {image, ...ordered} = product
            return ordered
        });

        const data = {
            nome,
            email,
            observations,
            subject: "[Minions Store] - Pedido realizado com sucesso!",
            text: "vlw por comprar parceiro!",
            order
        }

        setOrderModalOpen(true)
        setIsWaitingOrder(true)

        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsSucceedOrder(false)
        /* await axios.post(MAILER_URL!, data)
        .then(res => {
            setIsSucceedOrder(true)
            console.log(JSON.stringify(res))
        })
        .catch(res => {
            setIsSucceedOrder(false)
            console.log(JSON.stringify(res))
        }) */

        setIsWaitingOrder(false)
    }

    function openCartModal(){
        setCartModalOpen(true)
    }

    function closeCartModal(){
        setCartModalOpen(false)
    }

    function openOrderModal(){
        setOrderModalOpen(true)
    }

    function closeOrderModal(){
        setOrderModalOpen(false)
    }

    return(
        <ShoppingCartContext.Provider value={{
            numberSelectedProducts,
            cartProducts,
            isWaitingOrder,
            isSucceedOrder,
            addProductToCart,
            removeProductInCart,
            increaseProductInCart,
            decreaseProductInCart,
            openCartModal,
            closeCartModal,
            openOrderModal,
            closeOrderModal,
            checkOut,
        }}>
            {children}
            {isCartModalOpen && <ShoppingCartModal/>}
            {isOrderModalOpen && <OrderModal/>}
        </ShoppingCartContext.Provider>
    )
}