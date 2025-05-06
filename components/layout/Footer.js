import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isPledgePage = pathname === '/pledge'
  const isCommentsPage = pathname === '/comments'
  const isAdminPage = pathname === '/admin'

  return (
    <>
      {!isPledgePage && !isCommentsPage && !isAdminPage && (
        <footer className='bg-[#F5EFE0] text-white py-8 md:py-16 font-normal text-base md:text-lg'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-[#2B2B39] font-bold text-2xl text-center mb-8'>
              What is the Rule of Law and why does it matter?{' '}
            </h2>
            <p className='mb-8 leading-relaxed text-[#2B2B39]'>
              Simply stated, it is a guiding principle used and followed in
              democratic societies to ensure that: (1) the people get to elect
              their government, and get to do so in fair and open elections, (2)
              although the elected government is responsible for making laws,
              the law applies to everyone equally, including to the government,
              (3) laws are made known to everyone so that they can be followed,
              (4) government and citizens are held accountable to the rule of
              law through cases brought to court, and decided by an independent
              judiciary. Judges must be independent to ensure they interpret the
              law according to legal principles, and not according to personal
              bias, political affiliation or under undue pressure or coercion.
            </p>
            <p className='mb-8 leading-relaxed text-[#2B2B39]'>
              In short, the rule of law guards against arbitrary exercise of
              government power, and ensures equal access to and protection under
              the law (protections like the right to due process/a fair
              hearing). So, while governments can pass laws, they still have to
              conform to basic legal principles that have been developed to
              ensure fairness. In addition to those principles, in Canada we
              also have a Constitution (which includes the Canadian Charter of
              Rights and Freedoms). The Constitution is the supreme law with
              which all laws must conform. The Charter guarantees certain rights
              and freedoms to all Canadians, such as the freedom of religion and
              speech, or the right to life, liberty and security of the person.
              If a law is found to be unconstitutional, then it might be struck
              down as unenforceable.
            </p>
          </div>
        </footer>
      )}

      {!isPledgePage && !isCommentsPage && !isAdminPage && (
        <div className='max-w-6xl mx-auto px-4'>
          <p className='my-30 leading-relaxed text-[#2B2B39] text-center font-bold'>
            The Rule of Law Project has been started by a group of concerned
            lawyers, who want to educate the public about the important role the
            rule of law plays in our democracy, and to encourage lawyers and
            others to stand up for the rule of law so that it does not get
            eroded over time.
          </p>
        </div>
      )}

      {!isPledgePage && !isCommentsPage && !isAdminPage && (
        <footer className='bg-[#C1351A] text-white py-8 md:py-16 font-normal text-base md:text-lg'>
          <div className='max-w-6xl mx-auto px-4'>
            <p className='text-center mb-8 leading-relaxed'>
              The Rule of Law Project Canada is dedicated to creating a
              community of lawyers that will <br /> work together to support the
              rule of law. We welcome lawyers from all areas of practice. We{' '}
              <br /> will strive to educate all Canadians on the importance of
              the rule of law.
            </p>
          </div>
        </footer>
      )}

      <footer className='bg-[#22130C] py-8'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8'>
          <div className='mb-6 md:mb-0'>
            <p className='font-bold text-base text-[#FFFCF7]'>
              Rule Of Law Canada
            </p>
            <p className='mt-4 md:mt-8 text-white max-w-md font-normal text-base md:text-lg'>
              The Rule of Law is the bedrock on which Canada’s constitutional
              democracy stands. It holds all people accountable to the law, and
              protects the rights and freedoms that all Canadians are entitled
              to enjoy in this free and democratic society.
            </p>
            <p className='mt-6 md:mt-10 text-sm text-[#FFFCF7] font-normal'>
              Artist John Greer photo credit Jennifer Aitkens{' '}
            </p>
            <p className='mt-2 md:mt-4 text-sm text-[#FFFCF7] font-normal'>
              © 2025 Rule of Law Canada
            </p>
          </div>

          <div>
            <h3 className='font-bold text-base text-[#FFFCF7] mb-4 md:mb-8'>
              Links
            </h3>
            <ul className='space-y-2 text-sm md:text-base text-[#FFFCF7] font-normal'>
              <li>
                <Link
                  href='https://lso.ca/about-lso/legislation-rules/rules-of-professional-conduct/complete-rules-of-professional-conduct'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  LSO Rules of Professional Conduct
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.ontario.ca/laws/statute/90l08'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  Ontario Law Society Act
                </Link>
              </li>
              <li>
                <Link
                  href='https://lso.ca/about-lso/legislation-rules/by-laws'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  LSO By-Laws
                </Link>
              </li>
              <li>
                <Link
                  href='https://lso.ca/about-lso/legislation-rules/by-laws/by-law-4'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white transition-colors duration-300'
                >
                  LSO By-Law 4
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
