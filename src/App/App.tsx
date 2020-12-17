import React from 'react'
import Footer from '../Footer/Footer'
import s from './App.module.scss'

function App() {
  return (
    <div className={s.App}>
      <div className={s.container}>
        <div className={s.wrapper}>Настройка VPN</div>
        <Footer />
      </div>
    </div>
  )
}

export default App
