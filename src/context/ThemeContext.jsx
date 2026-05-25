import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const isDark = true
  const toggleTheme = () => {}

  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-navbar-theme')
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
