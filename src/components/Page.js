import React from 'react'
import Header from './Header'
import { useTheme } from './ThemeChange'

const Page = () => {
  const { isDarkMode } = useTheme()

  return (
    <div id="app" className={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <article>
        <h2>React Course</h2>
        <p> A course that teaches you React.</p>
      </article>
    </div>
  )
}

export default Page
