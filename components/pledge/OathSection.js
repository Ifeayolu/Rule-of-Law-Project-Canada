import { motion } from 'framer-motion'

export default function OathSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className='w-full max-w-4xl mx-auto mt-20 md:mt-40 px-4'
    >
      <h2 className='text-center text-xl md:text-2xl font-normal text-[#5F5F75] mb-4 md:mb-8'>
        OATH
      </h2>
      <p className='text-center mb-6 md:mb-10 text-2xl md:text-3xl lg:text-4xl font-bold text-[#2B2B39]'>
        Required oath: licence to practise law in Ontario as a barrister and
        solicitor
      </p>

      <div className='p-4 md:p-6 text-[#2B2B39]'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-6 md:mb-8 text-base md:text-lg font-bold'
        >
          21. (1) The required oath for an applicant for the issuance of a
          licence to practise law in Ontario as a barrister and solicitor is as
          follows:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-lg md:text-xl mb-10 font-normal leading-relaxed'
        >
          I … accept the honour and privilege, duty and responsibility of
          practising law as a barrister and solicitor in the Province of
          Ontario. I shall protect and defend the rights and interests of such
          persons as may employ me. I shall conduct all cases faithfully and to
          the best of my ability. I shall neglect no one’s interest and shall
          faithfully serve and diligently represent the best interests of my
          client. I shall not refuse causes of complaint reasonably founded, nor
          shall I promote suits upon frivolous pretences. I shall not pervert
          the law to favour or prejudice any one, but in all things I shall
          conduct myself honestly and with integrity and civility. I shall seek
          to ensure access to justice and access to legal services. I shall seek
          to improve the administration of justice. I shall champion the rule of
          law and safeguard the rights and freedoms of all persons. I shall
          strictly observe and uphold the ethical standards that govern my
          profession. All this I do swear or affirm to observe and perform to
          the best of my knowledge and ability.
        </motion.p>
      </div>
    </motion.div>
  )
}
