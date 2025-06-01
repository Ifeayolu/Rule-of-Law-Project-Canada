import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import PledgeModal from '@/components/home/PledgeModal'
import ImageGallery from '@/components/home/ImageGallery'
import AboutSection from '@/components/home/AboutSection'
import PrincipleSection from '@/components/home/PrincipleSection'

const totalPledgeGoal = 1000

export default function Home() {
  const { t } = useTranslation()
  const router = useRouter()
  const [pledgeCount, setPledgeCount] = React.useState(0)
  const [commentsCount, setCommentsCount] = React.useState(0)
  const [pledgePercentage, setPledgePercentage] = React.useState(0)

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: modalRef, inView: modalInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: principlesRef, inView: principlesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  React.useEffect(() => {
    if (router.asPath.includes('#about-section')) {
      setTimeout(() => {
        scrollToSection('about-section')
      }, 100)
    }
  }, [router.asPath])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/pledge')
        const data = await response.json()
        setPledgeCount(data.count)
        setCommentsCount(data.commentsCount)
        setPledgePercentage((data.count / totalPledgeGoal) * 100)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#fffcf7] to-[#fffcf7]'>
      <Head>
        <title>Rule of Law Canada | {t('takePledge')}</title>
        <meta name='description' content={t('takePledge')} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar onAboutClick={() => scrollToSection('about-section')} />

      <main className='pt-24 mx-auto max-w-6xl px-4'>
        <HeroSection heroRef={heroRef} heroInView={heroInView} />
      </main>

      <AboutSection
        principlesRef={principlesRef}
        principlesInView={principlesInView}
      />

      <div className='my-20 text-center'>
        <button
          onClick={() => router.push('/pledge')}
          className='bg-[#C1351A] hover:bg-red-800 text-white font-bold px-6 md:px-8 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm md:text-base'
        >
          {t('takePledge')}
        </button>
      </div>

      <div className='hidden md:block'>
        <ImageGallery />
      </div>

      <PrincipleSection
        principlesRef={principlesRef}
        principlesInView={principlesInView}
      />

      <main className='mx-auto max-w-7xl px-4 pb-8 md:pb-98'>
        <div className='relative w-full mt-8 md:mt-10'>
          <div className='relative z-10 w-full mx-auto'>
            <PledgeModal
              modalRef={modalRef}
              modalInView={modalInView}
              pledgePercentage={pledgePercentage}
              pledgeCount={pledgeCount}
              commentsCount={commentsCount}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
