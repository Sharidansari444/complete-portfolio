/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useContext , createContext, useState,  } from "react";

const ThemeContext = createContext()

const ThemeProvider =({ children })=>{
   const [theme, setTheme] = useState('light')

   return(

   <ThemeContext.Provider value={[theme, setTheme]}>
    {children}
   </ThemeContext.Provider>
   )
}

const useTheme = () => useContext(ThemeContext)

export{ useTheme, ThemeProvider}