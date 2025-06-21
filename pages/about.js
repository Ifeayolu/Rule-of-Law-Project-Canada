import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function About() {
  const { t } = useTranslation()

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: principlesRef, inView: principlesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#fffcf7] to-[#fffcf7]'>
      <Head>
        <title>{t('about')} | Rule of Law Project Canada</title>
        <meta
          name='description'
          content='Learn about the Rule of Law Project Canada and our mission to protect judicial independence'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className='pt-28 mx-auto max-w-7xl px-6 md:px-8'>
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='py-12 md:py-16'
        >
          <h1 className='text-3xl md:text-5xl font-bold text-[#2B2B39] mb-18'>
            {t('projectPresentation')}
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            <div className='lg:col-span-3 space-y-6 text-[#5F5F75] text-lg leading-relaxed'>
              <p>{t('presentationIntro')}</p>

              <p>{t('presentationDiscussion')}</p>

              <div className='space-y-8 mt-8'>
                <div>
                  <p className='font-bold text-lg text-[#5F5F75]'>
                    1. {t('protectionJudicial')}
                  </p>
                  <p>{t('protectionJudicialDesc')}</p>
                </div>

                <div>
                  <p className='font-bold text-lg text-[#5F5F75]'>
                    2. {t('legalWorkSupporting')}
                  </p>
                  <p>{t('legalWorkSupportingDesc')}</p>
                </div>

                <div>
                  <p className='font-bold text-lg text-[#5F5F75]'>
                    3. {t('attackOnOne')}
                  </p>
                  <p>{t('attackOnOneDesc')}</p>
                </div>
              </div>

              <p>{t('ontarioOath')}</p>

              <p
                className=' text-[#5F5F75]'
                dangerouslySetInnerHTML={{ __html: t('ontarioOathText') }}
              ></p>

              <p>{t('oathConclusion')}</p>

              <p>{t('callToAction')}</p>

              <div>
                <p>Sandra Barton</p>
                <p>Sheila Block</p>
                <p>Gerald Chan</p>
                <p>Jennifer Orange</p>
                <p>Lindsay Scott</p>
                <p>Jake Okechukwu Effoduh</p>
              </div>

              <div className='text-center mt-30 mb-10'>
                <Link
                  href='/pledge'
                  className='inline-block bg-[#C1351A] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#a12e17] transition-colors duration-300'
                >
                  {t('takePledge')}
                </Link>
              </div>
            </div>

            <div className='lg:col-span-2 space-y-4 mt-100 hidden lg:block image-sidebar'>
              <div className='grid grid-cols-2 gap-30 relative'>
                <div className='relative h-64 md:h-70 -mt-8 w-[270px]'>
                  <Image
                    src='/images/courthouse-exterior.png'
                    alt='Courthouse exterior'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>

                <div className='relative h-32 md:h-48 mt-30 w-[270px]'>
                  <Image
                    src='/images/scales-of-justice.png'
                    alt='Scales of justice'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-28 -mt-16'>
                <div className='relative h-32 md:h-48 w-[270px]'>
                  <Image
                    src='/images/superior.png'
                    alt='Superior court'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
                <div className='relative h-64 md:h-70 w-[270px] mt-16'>
                  <Image
                    src='/images/canadian-leaf.png'
                    alt='Canadian maple leaf'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
