import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const router = useRouter()

  const pathname = usePathname()
  const isAboutPage = pathname === '/about'
  const isPledgePage = pathname === '/pledge'
  const isCommentsPage = pathname === '/comments'
  const isProvincialPage = pathname === '/provincial-bylaws'
  const isAdminPage = pathname === '/admin'

  return (
    <>
      {!isPledgePage &&
        !isCommentsPage &&
        !isAdminPage &&
        !isAboutPage &&
        !isProvincialPage && (
          <footer className='bg-[#F5EFE0] text-white py-8 md:py-20 font-normal text-base md:text-lg'>
            <div className='max-w-6xl mx-auto px-4'>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-[#2B2B39] font-bold text-4xl text-center mb-15'
              >
                {t('whatIsRuleOfLaw')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='mb-8 leading-relaxed text-[#2B2B39]'
              >
                {t('ruleOfLawExplanation1')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className='mb-8 leading-relaxed text-[#2B2B39]'
              >
                {t('ruleOfLawExplanation2')}
              </motion.p>

              <div className='mt-30 text-center'>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  onClick={() => router.push('/pledge')}
                  className='bg-[#C1351A] hover:bg-red-800 text-white font-bold px-6 md:px-8 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm md:text-base'
                >
                  {t('takePledge')}
                </motion.button>
              </div>
            </div>
          </footer>
        )}

      {!isPledgePage &&
        !isCommentsPage &&
        !isAdminPage &&
        !isAboutPage &&
        !isProvincialPage && (
          <div className='relative overflow-hidden py-16 md:py-20'>
            <div className='absolute inset-0 z-0'>
              <Image
                src='/images/BigFlag.png'
                alt='Background'
                layout='fill'
                objectFit='cover'
                className='w-full h-full object-cover [object-position:center_40%]'
                priority
              />
              <div className='absolute inset-0 bg-black/20' />{' '}
            </div>

            <div className='relative z-10 max-w-6xl mx-auto py-8 md:py-6'>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='leading-relaxed text-white text-center font-normal text-base md:text-lg'
              >
                {t('ruleOfLawProjectStarted')}
              </motion.p>
            </div>
          </div>
        )}

      {!isPledgePage &&
        !isCommentsPage &&
        !isAdminPage &&
        !isAboutPage &&
        !isProvincialPage && (
          <footer className='bg-[#C1351A] text-white py-8 md:py-18 font-normal text-base md:text-lg'>
            <div className='max-w-6xl mx-auto'>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-center mb-8 leading-relaxed'
              >
                {t('ruleOfLawProjectDescription')}
              </motion.p>
            </div>
          </footer>
        )}

      <footer className='bg-[#22130C] py-8'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8'>
          <div className='mb-6 md:mb-0'>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='font-bold text-base text-[#FFFCF7]'
            >
              {t('ruleOfLawProjectCanada')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='mt-4 md:mt-8 text-white max-w-md font-normal text-base md:text-lg'
            >
              {t('footerDescription')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='mt-2 md:mt-24 text-sm text-[#FFFCF7] font-normal'
            >
              {t('copyright')}
            </motion.p>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='font-bold text-base text-[#FFFCF7] mb-4 md:mb-8'
            >
              {t('externalLinks')}
            </motion.h3>
            <ul className='space-y-2 text-sm md:text-base text-[#FFFCF7] font-normal'>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href='https://cba.org/news/statement-from-cba-president-lynne-vicars-on-threats-to-the-rule-of-law-courts-and-the-legal-profes/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {t('canadianBarStatement')}
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href='https://www.lawsociety.ab.ca/statement-from-the-federation-of-law-societies-of-canada-on-threats-to-the-rule-of-law-the-independence-of-the-bar-and-judicial-independence-in-the-united-states/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {t('federationStatement')}
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  href='https://www.ontariocourts.ca/ocj/news/public-statement-by-ontarios-three-chief-justices-regarding-judicial-independence/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {t('chiefJusticesStatement')}
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href='https://www.ila-canada.ca/post/statement-of-president-oonagh-e-fitzgerald-of-the-international-law-association-of-canada-on-mainta'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {t('intlLawStatement')}
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href='https://albertacourts.ca/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  {t('statementByChiefJustices')}
                </Link>
              </motion.li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className='mt-8'
            >
              <p className='text-sm md:text-base text-[#FFFCF7] font-normal'>
                {t('contactInfo')}
              </p>
              <Link
                href='mailto:info@ruleoflawproject.ca'
                className='text-sm md:text-base text-[#FFFCF7] font-bold hover:text-white transition-colors duration-300'
              >
                info@ruleoflawproject.ca
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  )
}
