import Image from 'next/image'
import { motion } from 'framer-motion'
import { principles } from '@/data/principles'

export default function PrincipleSection({ principlesRef, principlesInView }) {
  return (
    <div
      ref={principlesRef}
      className='mt-12 md:mt-18 flex flex-col md:flex-row gap-8 md:gap-12 items-start'
    >
      <div className='grid md:grid-cols-1 gap-6 md:gap-8 flex-1 order-2 md:order-1'>
        {principles.map((principle, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: principlesInView ? 1 : 0,
              x: principlesInView ? 0 : -20,
            }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className='flex flex-col md:flex-row gap-4'
          >
            <div className='shrink-0 bg-[#C1351A] rounded-full w-16 h-16 md:w-[72px] md:h-[72px] flex items-center justify-center text-white font-bold mx-auto md:mx-0'>
              <Image
                src={principle.icon}
                alt={principle.title}
                width={idx === 0 ? 32 : idx === 1 ? 28 : 30}
                height={idx === 0 ? 32 : idx === 1 ? 32 : 30}
                className={`md:w-auto md:h-auto ${
                  idx === 0
                    ? 'md:w-[55px] md:h-[55px]'
                    : idx === 1
                    ? 'md:w-[42px] md:h-[48px]'
                    : 'md:w-[48px] md:h-[48px]'
                }`}
              />
            </div>

            <div className='text-center md:text-left'>
              <h3 className='font-bold text-[#2B2B39] text-lg md:text-xl mb-1'>
                {principle.title}
              </h3>
              <p className='text-base md:text-lg font-normal text-[#5F5F75]'>
                {principle.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: principlesInView ? 1 : 0,
          x: principlesInView ? 0 : 20,
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='hidden md:flex flex-1 items-center justify-center min-h-[500px] order-1 md:order-2'
      >
        <Image
          src='/images/teamConquerImage.png'
          width={548}
          height={394}
          alt='teamConquer Image'
          className='w-full h-auto'
        />
      </motion.div>
    </div>
  )
}
