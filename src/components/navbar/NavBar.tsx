import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { setUserLanguage } from 'utils/userLanguage'

export const navLinks = [
  {
    id: '/',
    title: 'Home'
  },
  {
    id: 'admin',
    title: 'Admin'
  }
]

const NavBar = (): React.JSX.Element => {
  const [active, setActive] = React.useState('Home')
  const [language, setLanguage] = React.useState('en' || 'es')
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = setUserLanguage(navigator.language)
    if (lang !== 'es' && lang !== 'en') {
      changeLanguage('en')
      setLanguage('en')
    } else {
      changeLanguage(lang)
      setLanguage(lang)
    }
  }, [])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
  }

  return (
    <nav className="w-full h-[80px] flex py-6 justify-center items-center navbar">
      <div className="w-[calc(100%-80px)] flex justify-between">
        <p>WEBDEV</p>
        <ul className="gap-4 list-none sm:flex hidden justify-between items-center ">
          {navLinks.map((nav) => (
            <li key={nav.id} onClick={() => setActive(nav.title)}>
              <Link to={nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="list-none">
          <li className="flex gap-2">
            {language === 'es' ? (
              <button
                className="bg-blue-500 text-white font-semibold rounded-full w-6 h-6  flex items-center justify-center"
                type="button"
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white font-semibold rounded-full w-6 h-6 flex items-center justify-center"
                type="button"
                onClick={() => changeLanguage('es')}
              >
                ES
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
