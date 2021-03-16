import {createContext, ReactNode, useEffect, useState} from 'react'

import {ProductProps} from '../components/Product'
import { ShoppingCartModal } from '../components/ShoppingCartModal';

type ShoppingCartContextProps = {
    numberSelectedProducts: number,
    cartProducts: ShoppingCartProductProps[],
    addProductToCart: (product: Partial<ShoppingCartProductProps>) => void,
    openCartModal: () => void,
    closeCartModal: () => void,
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartProductProps = ProductProps & {
    amount: number,
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [numberSelectedProducts, setNumberSelectedProducts] = useState(0)
    const [cartProducts, setProduct] = useState([])
    const [isCartModalOpen, setCartModalOpen] = useState(false)

    function addProductToCart(product: ShoppingCartProductProps){
        let inCart = false
        
        //verifica de o produto ja está no carrinho, se estiver apenas aumenta a quantidade
        cartProducts.forEach(({id}, index) => {
            if(id === product.id){
                cartProducts[index].amount += 1
                inCart = true;
            }
        })

        //caso o produto não esteja no carrinho, insere no carrinho
        if(!inCart){
            let newCartProduct: ShoppingCartProductProps = {...product}

            newCartProduct.amount = 1;
            setProduct([...cartProducts, newCartProduct])
        }
        
        setNumberSelectedProducts(numberSelectedProducts + 1)
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
            openCartModal,
            closeCartModal,
        }}>
            {children}
            {isCartModalOpen && <ShoppingCartModal/>}
        </ShoppingCartContext.Provider>
    )
}