import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHomePage = router.pathname === '/'
  const isAboutPage = router.pathname === '/about'
  const isPledgePage = router.pathname === '/pledge'
  const isProvincialPage = router.pathname === '/provincial-bylaws'
  const isAdminPage = router.pathname === '/admin'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 md:py-6 md:px-14 bg-white shadow-sm'
    >
      <div className='flex items-center'>
        <Link href='/'>
          <Image
            src='/images/Rule-of-Law-Canada1.png'
            alt='Rule of Law Canada'
            width={227.45}
            height={48}
            className='cursor-pointer w-[170px] md:w-[227.45px] h-auto'
          />
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className='md:hidden flex flex-col justify-center items-center'
      >
        <span
          className={`bg-[#2B2B39] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-[#2B2B39] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-[#2B2B39] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='hidden md:flex space-x-6'>
        <Link
          href='/'
          className={`text-sm font-bold transition-colors duration-300 hover:text-[#C1351A] ${
            isHomePage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
          }`}
        >
          Home
        </Link>
        <Link
          href='/about'
          className={`text-sm font-bold transition-colors duration-300 hover:text-[#C1351A] ${
            isAboutPage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
          }`}
        >
          About
        </Link>
        <Link
          href='/pledge'
          className={`text-sm font-bold transition-colors duration-300 hover:text-[#C1351A] ${
            isPledgePage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
          }`}
        >
          Pledge
        </Link>
        <Link
          href='/provincial-bylaws'
          className={`text-sm font-bold transition-colors duration-300 hover:text-[#C1351A] ${
            isProvincialPage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
          }`}
        >
          By-Laws and Oaths of Law Societies
        </Link>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden'
      >
        <div className='flex flex-col p-4 space-y-4'>
          <Link
            href='/'
            className={`text-base font-bold transition-colors duration-300 hover:text-[#C1351A] text-left ${
              isHomePage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`text-base font-bold transition-colors duration-300 hover:text-[#C1351A] text-left ${
              isAboutPage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href='/pledge'
            className={`text-base font-bold transition-colors duration-300 hover:text-[#C1351A] text-left ${
              isPledgePage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Pledge
          </Link>
          <Link
            href='/provincial-bylaws'
            className={`text-base font-bold transition-colors duration-300 hover:text-[#C1351A] text-left ${
              isProvincialPage ? 'text-[#C1351A]' : 'text-[#2B2B39]'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            By-Laws and Oaths of Law Societies
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
}
