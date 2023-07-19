import { createContext, useState } from "react";

export const DataProvider = createContext()

export const DataContext = ({children}) =>{
    const [isLogged, setIsLogged] = useState(false)
    const initialValues = {
        isLogged,
        setIsLogged,
    }

    return <DataProvider.Provider value={initialValues}>
        {children}
    </DataProvider.Provider>
}