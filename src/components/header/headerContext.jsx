import { createContext, useState } from 'react'

export const categoryNameContext = createContext()

export const CategoryNameProvider = ({ children }) => {
    const [categoryName, setCategoryName] = useState('')

    return (
        <categoryNameContext.Provider value={{ categoryName, setCategoryName }}>
            {children}
        </categoryNameContext.Provider>
    )
}