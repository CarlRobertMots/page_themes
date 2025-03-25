import React from 'react'
import { useTheme } from './ThemeChange'

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Theme' : 'Dark Theme'}
      </button>
    </header>
  )
}

export default Header
