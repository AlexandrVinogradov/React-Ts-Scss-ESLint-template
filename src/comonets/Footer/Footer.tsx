import React from 'react'
import sberLogo from '../../img/sber-logo.png'
import SVGIcon from '../../SVGIcons'
import s from './Footer.module.scss'

const Footer: React.FC = (props) => {
  return (
    <footer className={s.Footer}>
      <div className={s.company}>
        <img className={s.logo} src={sberLogo} alt='Sber logo' />
        <p className={s.author}>Сделано в SberUser</p>
      </div>
      <a className={s.connect_with_us} href='mailto:test@htmlbook.ru?subject=Вопрос по настройкам VPN'>
        <SVGIcon className={s.connect_with_us__icon} name='mail-icon' />
        <p className={s.connect_with_us__title}>Обратная связь</p>
      </a>
    </footer>
  )
}

export default Footer
