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
