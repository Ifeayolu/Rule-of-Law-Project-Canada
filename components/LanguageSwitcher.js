import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = useRef(null)

  const currentLanguage =
    i18n.language === 'fr' ? t('currentLanguage') : 'ENGLISH'

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const changeLanguage = (lng) => {
    setIsOpen(false)
    i18n.changeLanguage(lng)
  }

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none transition-colors duration-200 min-w-[120px]'
      >
        <span>{currentLanguage}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-1 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-50'>
          <div className='py-1'>
            <button
              onClick={() => changeLanguage('en')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                i18n.language === 'en'
                  ? 'text-blue-600 font-semibold bg-blue-50'
                  : 'text-gray-700'
              }`}
            >
              {t('english')}
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                i18n.language === 'fr'
                  ? 'text-blue-600 font-semibold bg-blue-50'
                  : 'text-gray-700'
              }`}
            >
              {t('français')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
