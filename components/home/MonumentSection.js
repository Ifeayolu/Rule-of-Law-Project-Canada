import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MonumentSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className='relative mt-12'
    >
      <div className='relative h-[400px] md:h-[600px] lg:h-[700px]'>
        <Image
          src='/images/RectangleImage.png'
          alt='Background'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='absolute inset-0 flex items-center justify-center px-4'
      >
        <div className='relative w-full max-w-3xl aspect-[4/3] -translate-y-8 '>
          <Image
            src='/images/supremeCourtImage1.png'
            alt='SupremeCourt'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
