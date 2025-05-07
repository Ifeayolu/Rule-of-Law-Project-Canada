import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryImages } from '@/data/galleryImages'

export default function ImageGallery() {
  return (
    <div className='w-full max-w-5xl mx-auto mt-4 md:mt-16 overflow-hidden'>
      <motion.div
        className='flex gap-6 w-max'
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[...galleryImages, ...galleryImages].map((image, idx) => (
          <div key={idx} className='shrink-0 rounded-sm overflow-hidden'>
            <Image
              src={image.src}
              alt={image.alt}
              width={153}
              height={85}
              className='object-cover rounded-sm transition-transform duration-300 hover:scale-105'
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
