import React, {createContext, useContext, useState} from 'react';
export const ThemeContext = createContext();



export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const changeTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
        console.log(theme)
    }
    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme =  () => {
    return useContext(ThemeContext)
}

