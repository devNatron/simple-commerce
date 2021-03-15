import {createContext, ReactNode, useEffect, useState} from 'react'

import {ProductProps} from '../components/Product'

type ShoppingCartContextProps = {
    numberSelectedProducts: number,
    addProductToCart: (product: ProductProps) => void,
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [numberSelectedProducts, setNumberSelectedProducts] = useState(0)
    const [products, setProduct] = useState([])

    useEffect(() => {
        console.log(products)
    }, [products])

    function addProductToCart(product: ProductProps){
        setProduct([...products, product])
        setNumberSelectedProducts(numberSelectedProducts + 1)
    }

    return(
        <ShoppingCartContext.Provider value={{
            numberSelectedProducts,
            addProductToCart,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}