import { principles } from '@/data/principles'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection({ principlesRef, principlesInView }) {
  return (
    <div
      id='about-section'
      className='mt-[4rem] sm:mt-[6.625rem] scroll-mt-[20rem] sm:scroll-mt-[8.625rem] text-center bg-[#F5EFE0] py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-0'
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-xl sm:text-2xl md:text-4xl font-bold text-[#2B2B39] mb-6 sm:mb-8'
      >
        Coalition of Canadian Lawyers Supporting the Rule of Law
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-lg sm:text-xl md:text-2xl font-semibold text-[#C1351A] mb-10 sm:mb-14'
      >
        THE RULE OF LAW PLEDGE
      </motion.h3>

      <div
        ref={principlesRef}
        className='mt-10 sm:mt-12 md:mt-20 flex flex-col gap-10 sm:gap-12 items-start'
      >
        <div className='max-w-5xl mx-auto text-left text-[#2B2B39] text-lg sm:text-xl'>
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: principlesInView ? 1 : 0,
                y: principlesInView ? 0 : 30,
              }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-12 items-center sm:items-start'
            >
              <div className='shrink-0 bg-[#C1351A] rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] flex items-center justify-center text-white font-bold'>
                <Image
                  src={principle.icon}
                  alt={principle.title}
                  width={idx === 0 ? 28 : idx === 1 ? 26 : 28}
                  height={idx === 0 ? 28 : idx === 1 ? 28 : 28}
                  className={`sm:w-auto sm:h-auto ${
                    idx === 0
                      ? 'md:w-[55px] md:h-[55px]'
                      : idx === 1
                      ? 'md:w-[42px] md:h-[48px]'
                      : 'md:w-[48px] md:h-[48px]'
                  }`}
                />
              </div>

              <div className='text-center sm:text-left'>
                <h3 className='font-bold text-[#2B2B39] text-base sm:text-lg md:text-xl mb-1'>
                  {principle.title}
                </h3>
                <p className='text-sm sm:text-base md:text-lg font-normal text-[#5F5F75]'>
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
