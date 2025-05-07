import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PrincipleSection({ principlesRef, principlesInView }) {
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
          <p className='mb-6'>
            The Rule of Law is the bedrock on which Canada’s constitutional
            democracy stands. It holds all people accountable to the law, and
            protects the rights and freedoms that all Canadians are entitled to
            enjoy in this free and democratic society.
          </p>

          <p className='mb-6'>
            An attack on the Rule of Law is an attack on our democracy.{' '}
          </p>

          <p className='mb-6'>
            We are Canadian lawyers. Consistent with our oath, we are guardians,
            protectors and a voice for the Rule of Law in Canada. Today, we
            stand together in solidarity to re-affirm our duty to vigorously and
            unwaveringly defend the Rule of Law in Canada, and commit to the
            following principles:
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: principlesInView ? 1 : 0,
          y: principlesInView ? 0 : 30,
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='hidden md:flex flex-1 items-center justify-center min-h-[500px] order-1 md:order-2'
      >
        <Image
          src='/images/teamConquerImage.png'
          width={451}
          height={313}
          alt='teamConquer Image'
          className='w-auto h-[370px] rounded-md'
        />
      </motion.div>
    </div>
  )
}
