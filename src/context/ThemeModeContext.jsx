import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => setTheme((prev) => !prev)

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)