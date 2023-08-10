import { createContext, useState } from "react";

export const DataProvider = createContext()

export const DataContext = ({children}) =>{
    const [isLogged, setIsLogged] = useState(false)
    const [productId, setProductId] = useState("")
    const [token, setToken] = useState("")
    const [stringProd, setStringProd] = useState("")
    const initialValues = {
        isLogged,
        setIsLogged,
        productId,
        setProductId,
        token,
        setToken,
        stringProd,
        setStringProd
    }

    return <DataProvider.Provider value={initialValues}>
        {children}
    </DataProvider.Provider>
}