import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function ThankYouModal({ isOpen, pledgeCount, onClose }) {
  const router = useRouter()

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
                  Your pledge strengthens the foundation of our democracy.
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
