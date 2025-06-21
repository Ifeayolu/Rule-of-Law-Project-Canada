import React from 'react'
import { motion } from 'framer-motion'
import { provinces } from '@/data/provinces'
import { useTranslation } from 'react-i18next'

export default function PledgeForm({
  formData,
  isSubmitting,
  error,
  success,
  handleChange,
  handleSubmit: parentHandleSubmit,
}) {
  const { t } = useTranslation()
  const [validationErrors, setValidationErrors] = React.useState({})

  const validateEmail = (email) => {
    if (!email) return t('emailRequired')

    const basicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!basicEmailRegex.test(email)) {
      if (email.includes('@.')) {
        return t('emailInvalidDomainPeriod')
      }
      if (email.includes('..')) {
        return t('emailInvalidConsecutivePeriods')
      }
      if (!email.includes('@')) {
        return t('emailInvalidNoAt')
      }
      if (!email.includes('.')) {
        return t('emailInvalidNoDomain')
      }

      const domainPart = email.split('@')[1]
      if (domainPart && /[!#$%^&*()+=\[\]{}|\\<>\/]+/.test(domainPart)) {
        return t('emailInvalidDomainCharacters')
      }

      return t('emailInvalidFormat')
    }

    const domainParts = email.split('@')[1].split('.')
    if (domainParts[0] === '') {
      return t('emailInvalidDomainPeriod')
    }

    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailError = validateEmail(formData.email)

    if (emailError) {
      setValidationErrors({ ...validationErrors, email: emailError })
      return
    }

    setValidationErrors({})

    parentHandleSubmit(e)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: '',
      })
    }

    if (type === 'checkbox') {
      handleChange({
        target: {
          name,
          value: checked,
        },
      })
    } else {
      handleChange(e)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      onSubmit={handleSubmit}
      className='bg-white rounded-md p-4 md:p-8 text-gray-800 flex flex-col mt-8 md:mt-30 shadow-lg'
    >
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'
        >
          {t('thankYouPledge')}
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'
        >
          {error}
        </motion.div>
      )}

      <div className='mb-4 md:mb-10'>
        <label
          htmlFor='name'
          className='block text-sm md:text-base font-bold text-black mb-1'
        >
          {t('yourName')} *
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          required
          className='w-full p-2 border border-gray-300 rounded transition-all duration-300 focus:border-[#C1351A] focus:ring-1 focus:ring-[#C1351A] focus:outline-none'
        />
      </div>

      <div className='mb-4 md:mb-10'>
        <label
          htmlFor='companyName'
          className='block text-sm md:text-base font-bold text-black mb-1'
        >
          {t('designationOrganization')}
        </label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          value={formData.companyName}
          onChange={handleInputChange}
          className='w-full p-2 border border-gray-300 rounded transition-all duration-300 focus:border-[#C1351A] focus:ring-1 focus:ring-[#C1351A] focus:outline-none'
        />
      </div>

      <div className='mb-4 md:mb-10'>
        <label
          htmlFor='email'
          className='block text-sm md:text-base font-bold text-black mb-1'
        >
          {t('yourEmailLabel')} * <span>{t('yourEmailNote')}</span>
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
          className={`w-full p-2 border ${
            validationErrors.email
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
          } rounded transition-all duration-300 focus:border-[#C1351A] focus:ring-1 focus:ring-[#C1351A] focus:outline-none`}
        />
        {validationErrors.email && (
          <p className='text-red-500 text-xs mt-1'>{validationErrors.email}</p>
        )}
      </div>

      <div className='mb-4 md:mb-6'>
        <label
          htmlFor='province'
          className='block text-sm md:text-base font-bold text-black mb-1'
        >
          {t('province')} *
        </label>
        <select
          id='province'
          name='province'
          value={formData.province}
          onChange={handleInputChange}
          required
          className='w-full py-3 px-3 text-base border border-gray-300 rounded bg-white transition-all duration-300 focus:border-[#C1351A] focus:ring-1 focus:ring-[#C1351A] focus:outline-none appearance-none'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
            backgroundSize: '16px',
          }}
        >
          {provinces.map((province) => (
            <option key={province.value} value={province.value}>
              {province.label}
            </option>
          ))}
        </select>
      </div>

      <div className='my-12 flex items-start'>
        <div className='flex items-center h-5'>
          <input
            id='receiveUpdates'
            name='receiveUpdates'
            type='checkbox'
            checked={formData.receiveUpdates || false}
            onChange={handleInputChange}
            className='w-4 h-4 text-[#C1351A] border-gray-300 rounded focus:ring-[#C1351A]'
          />
        </div>
        <label
          htmlFor='receiveUpdates'
          className='ml-2 text-sm font-medium text-gray-700 '
        >
          {t('receiveUpdatesText')}
        </label>
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-[#C1351A] text-white font-bold text-sm md:text-base py-3 px-4 rounded-md disabled:opacity-50 transition-all duration-300 hover:bg-red-800 hover:shadow-lg transform hover:scale-[1.02]'
      >
        {isSubmitting ? (
          <div className='flex items-center justify-center'>
            <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            {t('submitting')}
          </div>
        ) : (
          t('takePledgeButton')
        )}
      </button>
    </motion.form>
  )
}
