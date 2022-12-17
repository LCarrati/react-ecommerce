import { createContext, useState } from 'react'

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false)

    const displayAlert = () => {
        setAlert(true)
        // console.log(alert)
        setTimeout(() => {
            tiraAlert()
        }, 2500);
        // console.log(alert)
        const tiraAlert = () => {
            setAlert(false)
        }
    }

    return (
        <AlertContext.Provider value={{ alert, setAlert, displayAlert }}>
            {children}
        </AlertContext.Provider>
    )
}