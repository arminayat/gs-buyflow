import React, { FC, ReactNode } from 'react'
import logo from '../assets/images/logo.svg'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {children}
    </div>
  </>
)

export default MainLayout
