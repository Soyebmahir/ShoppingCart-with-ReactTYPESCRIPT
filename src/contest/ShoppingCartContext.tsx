import React, { createContext, useContext } from "react"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderPros={
    children:React.ReactNode
}
export function ShoppingCartProvider({ children }:ShoppingCartProviderPros) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}