import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function PrincipleSection({ principlesRef, principlesInView }) {
  const { t } = useTranslation()

  return (
    <div
      ref={principlesRef}
      className='mt-12 md:mt-18 flex flex-col md:flex-row  items-center px-8 md:px-50 '
    >
      <div className='grid md:grid-cols-1 gap-6 md:gap-6 flex-1 order-2 md:order-1'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className=' mx-auto text-left text-[#2B2B39] text-xl'
        >
          <p className='mb-6'>{t('ruleOfLawBedrock')}</p>

          <p className='mb-6'>{t('attackOnDemocracy')}</p>

          <p className='mb-6'>{t('weAreCanadianLawyers')}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: principlesInView ? 1 : 0,
          y: principlesInView ? 0 : 30,
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='hidden md:flex flex-1 items-center justify-center min-h-[500px] order-1 md:order-2 relative'
      >
        <div className='relative'>
          <Image
            src='/images/teamConquerImage.png'
            width={451}
            height={313}
            alt='teamConquer Image'
            className='w-auto h-[370px] rounded-md'
          />
          <div
            className='absolute bottom-2 right-1 text-white text-xs px-1 rounded shadow-lg'
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            Artist John Greer photo credit Jennifer Aitkens
          </div>
        </div>
      </motion.div>
    </div>
  )
}
