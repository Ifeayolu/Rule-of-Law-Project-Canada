import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <div
      id='about-section'
      className='mt-[28rem] sm:mt-[6.625rem] scroll-mt-[24rem] sm:scroll-mt-[8.625rem] text-center'
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-2xl md:text-4xl font-bold text-[#2B2B39] mb-6 '
      >
        Coalition of Canadian Lawyers Supporting the Rule of Law
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-xl md:text-2xl font-normal text-[#5F5F75] mb-12'
      >
        RULE OF LAW PLEDGE
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className='max-w-5xl mx-auto text-left text-[#2B2B39] text-xl'
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
          protectors and a voice for the Rule of Law in Canada.  Today, we stand
          together in solidarity to re-affirm our duty to vigorously and
          unwaveringly defend the Rule of Law in Canada, and commit to the
          following principles:
        </p>
      </motion.div>
    </div>
  )
}
