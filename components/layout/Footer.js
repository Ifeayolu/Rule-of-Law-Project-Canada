import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Footer() {
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
                What is the Rule of Law and why does it matter?{' '}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='mb-8 leading-relaxed text-[#2B2B39]'
              >
                Simply stated, it is a guiding principle used and followed in
                democratic societies to ensure that: (1) the people get to elect
                their government, and get to do so in fair and open elections,
                (2) although the elected government is responsible for making
                laws, the law applies to everyone equally, including to the
                government, (3) laws are made known to everyone so that they can
                be followed, (4) government and citizens are held accountable to
                the rule of law through cases brought to court, and decided by
                an independent judiciary. Judges must be independent to ensure
                they interpret the law according to legal principles, and not
                according to personal bias, political affiliation or under undue
                pressure or coercion.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className='mb-8 leading-relaxed text-[#2B2B39]'
              >
                In short, the rule of law guards against arbitrary exercise of
                government power, and ensures equal access to and protection
                under the law (protections like the right to due process/a fair
                hearing). So, while governments can pass laws, they still have
                to conform to basic legal principles that have been developed to
                ensure fairness. In addition to those principles, in Canada we
                also have a Constitution (which includes the Canadian Charter of
                Rights and Freedoms). The Constitution is the supreme law with
                which all laws must conform. The Charter guarantees certain
                rights and freedoms to all Canadians, such as the freedom of
                religion and speech, or the right to life, liberty and security
                of the person. If a law is found to be unconstitutional, then it
                might be struck down as unenforceable.
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
                  Take the Pledge
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
                The Rule of Law Project was started by a group of concerned
                lawyers, who want to educate the public about <br /> the
                important role the rule of law plays in our democracy, and to
                encourage lawyers and others to stand up for the rule of <br />{' '}
                law so that it does not get eroded over time.
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
                The Rule of Law Project Canada is dedicated to creating a
                community of lawyers that will work together to support <br />
                the rule of law. We welcome lawyers from all areas of practice.
                We will strive to educate all Canadians on the importance of{' '}
                <br />
                the rule of law.
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
              Rule of Law Project Canada{' '}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='mt-4 md:mt-8 text-white max-w-md font-normal text-base md:text-lg'
            >
              The Rule of Law project Canada is the bedrock on which Canada’s
              constitutional democracy stands. It holds all people accountable
              to the law, and protects the rights and freedoms that all
              Canadians are entitled to enjoy in this free and democratic
              society.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='mt-2 md:mt-24 text-sm text-[#FFFCF7] font-normal'
            >
              © 2025 Rule of Law Project Canada{' '}
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
              External Links
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
                  Canadian Bar Association Statement
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
                  Federation of Law Societies of Canada Statement
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
                  Statement of the Chief Justices of Ontario
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
                  International Law Association Canada Statement
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
