import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ThankYouModal({ isOpen, pledgeCount, onClose }) {
  const router = useRouter()
  const [isCopied, setIsCopied] = useState(false)
  const shareUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://ruleoflawprojectcanada.netlify.app/'

  const shareMessage = `I've joined ${
    pledgeCount || 0
  } champions upholding the Rule of Law in Canada. Join us!`

  if (!isOpen) return null

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  const goToHomePage = () => {
    if (onClose) {
      onClose()
    }

    router.push('/')
  }

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    shareMessage + ' ' + shareUrl
  )}`
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareMessage
  )}&url=${encodeURIComponent(shareUrl)}`
  const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(
    shareUrl
  )}&text=${encodeURIComponent(shareMessage)}`
  const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}&summary=${encodeURIComponent(shareMessage)}`
  const emailLink = `mailto:?subject=${encodeURIComponent(
    'Rule of Law Pledge'
  )}&body=${encodeURIComponent(shareMessage + '\n\n' + shareUrl)}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-opacity-30 backdrop-blur-[2px] z-40'
            onClick={handleClose}
            style={{ pointerEvents: 'auto' }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-md'
            style={{ pointerEvents: 'auto' }}
          >
            <div className='bg-white rounded-lg shadow-2xl overflow-hidden'>
              <div className='bg-[#C1351A] text-white p-4 md:p-6 text-center relative'>
                <div className='mb-3 md:mb-4 flex justify-center'>
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                    }}
                    className='relative w-16 h-16 md:w-20 md:h-20'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      className='w-full h-full'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 2L4 5V8C4 11.3137 7 14 12 14C17 14 20 11.3137 20 8V5L12 2Z'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M4 8V16.5M12 14V22M20 8V16.5'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <circle cx='4' cy='19' r='2.5' fill='white' />
                      <circle cx='12' cy='22' r='2' fill='white' />
                      <circle cx='20' cy='19' r='2.5' fill='white' />
                    </svg>
                  </motion.div>
                </div>

                <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>
                  Justice Champion!
                </h2>
                <p className='mt-1 md:mt-2 text-base md:text-lg'>
                  Thank you for reaffirming your commitment to the Rule of Law
                  in Canada. Would you like to share this pledge with other
                  lawyers?
                </p>

                <motion.div
                  className='absolute top-2 right-2 opacity-50 text-2xl md:text-3xl'
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✦
                </motion.div>
                <motion.div
                  className='absolute bottom-2 left-2 opacity-50 text-2xl md:text-3xl'
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✦
                </motion.div>
              </div>

              <div className='p-4 md:p-6'>
                <div className='bg-gray-100 rounded-lg p-3 md:p-4 mb-4 md:mb-6 text-center'>
                  <p className='text-sm md:text-base text-gray-600'>
                    You have joined a movement of
                  </p>
                  <motion.p
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: 1 }}
                    className='text-2xl md:text-3xl font-bold text-[#2B2B39]'
                  >
                    {pledgeCount || 0}
                  </motion.p>
                  <p className='text-sm md:text-base text-gray-600'>
                    champions upholding the Rule of Law
                  </p>
                </div>

                <div className='mb-5'>
                  <p className='text-center font-semibold text-gray-700 mb-3'>
                    Share your pledge:
                  </p>
                  <div className='flex justify-center space-x-3 mb-3'>
                    <motion.a
                      href={whatsappLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='bg-[#25D366] text-white p-2 rounded-full'
                      aria-label='Share on WhatsApp'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                      </svg>
                    </motion.a>

                    <motion.a
                      href={twitterLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='bg-black text-white p-2 rounded-full'
                      aria-label='Share on Twitter/X'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
                      </svg>
                    </motion.a>

                    <motion.a
                      href={telegramLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='bg-[#0088cc] text-white p-2 rounded-full'
                      aria-label='Share on Telegram'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
                      </svg>
                    </motion.a>

                    <motion.a
                      href={linkedinLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='bg-[#0077B5] text-white p-2 rounded-full'
                      aria-label='Share on LinkedIn'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                      >
                        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                      </svg>
                    </motion.a>

                    <motion.a
                      href={emailLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className='bg-gray-600 text-white p-2 rounded-full'
                      aria-label='Share via Email'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                        <polyline points='22,6 12,13 2,6'></polyline>
                      </svg>
                    </motion.a>
                  </div>

                  <div className='flex justify-center'>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={copyToClipboard}
                      className='flex items-center text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-1 px-3 rounded-md transition-all duration-200'
                    >
                      {isCopied ? (
                        <>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 mr-1'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 mr-1'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                            />
                          </svg>
                          <span>Copy Link</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToHomePage}
                    className='bg-[#C1351A] hover:bg-red-800 text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-md transition-all duration-300 hover:shadow-lg flex items-center text-sm md:text-base'
                  >
                    <span>Continue Your Journey</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
