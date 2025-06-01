import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const Pagination = ({ totalPages = 3, currentPage = 1, onPageChange }) => {
  const { t } = useTranslation()

  const handlePageClick = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber)
    }
  }

  return (
    <div className='flex items-center justify-between w-full py-8'>
      <div className='flex items-center space-x-2'>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1
          const isActive = pageNumber === currentPage

          return (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${
                isActive
                  ? 'bg-[#C1351A] text-white'
                  : 'bg-[#F2EAE1] text-[#5F5F75] hover:bg-gray-[#F2EAE1] cursor-pointer'
              }`}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>

      <div className='text-base text-[#5F5F75] font-bold'>
        {currentPage} - {totalPages} {t('byLawsCount')}
      </div>
    </div>
  )
}

export default function ProvincialByLaws() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const { t } = useTranslation()

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getPageData = () => {
    return {
      1: [
        {
          tag: t('ontario'),
          title: t('ontarioOathTitle'),
          content: (
            <>
              {
                t('ontarioOathContent').split(
                  'I shall champion the rule of law and safeguard the rights and freedoms of all persons.'
                )[0]
              }
              <strong>
                {t('ontarioOathContent').includes(
                  'I shall champion the rule of law and safeguard the rights and freedoms of all persons.'
                )
                  ? 'I shall champion the rule of law and safeguard the rights and freedoms of all persons.'
                  : ''}
              </strong>
              {
                t('ontarioOathContent').split(
                  'I shall champion the rule of law and safeguard the rights and freedoms of all persons.'
                )[1]
              }
            </>
          ),
          section: t('ontarioSection'),
        },
        {
          tag: t('alberta'),
          content: (
            <div>
              {t('albertaOathIntro')}
              <br />
              <br />
              <div>{t('albertaOathContent')}</div>
            </div>
          ),
        },
        {
          tag: t('britishColumbia'),
          content: (
            <>
              {
                t('bcOathContent').split(
                  'that you will uphold the rule of law and the rights and freedoms of all persons'
                )[0]
              }
              <strong>
                that you will uphold the rule of law and the rights and freedoms
                of all persons according to the laws of Canada and of the
                Province of British Columbia, including the Constitution, which
                recognizes and affirms the Aboriginal and treaty rights of First
                Nations, Inuit and Métis peoples.
              </strong>
            </>
          ),
          section: t('bcSection'),
        },
        {
          tag: t('saskatchewan'),
          title: t('saskPreface'),
          content: (
            <>
              <strong>{t('saskRuleOfLaw')}</strong>
              {t('saskRuleOfLawContinued')}
              <strong>{t('saskProfessionalResponsibility')}</strong>
              <div className='mt-6'>{t('saskCodeDescription')}</div>
              <div className='mt-6 font-bold'>{t('saskCodeTitle')}</div>
              <hr className='my-8' />
              {t('saskOathIntro')}
              <strong>{t('saskOathContent')}</strong>
              {t('saskOathConclusion')}
            </>
          ),
          section: t('saskSection'),
        },
        {
          tag: t('quebec'),
          title: t('quebecPreamble'),
          content: (
            <>
              <div
                dangerouslySetInnerHTML={{ __html: t('quebecPreambleContent') }}
              />
              <div
                className='mt-6'
                dangerouslySetInnerHTML={{ __html: t('quebecPreliminary') }}
              />
              <div
                className='mt-6'
                dangerouslySetInnerHTML={{ __html: t('quebecApplication') }}
              />
              <div className='mt-6'>{t('quebecRuleOfLaw')}</div>
            </>
          ),
          section: t('quebecSection'),
        },
      ],
      2: [
        {
          tag: t('novaScotia'),
          content: (
            <>
              <strong>{t('nsOathTitle')}</strong> <br />
              {t('nsOathIntro')}
              <div className='italic mt-2'>{t('nsOathContent')}</div>
              <div className='mt-6 font-bold'>{t('nsRegulations')}</div>
              <hr className='my-8' />
              <div className='mt-6 font-bold'>{t('nsPreface')}</div>
              <strong>{t('nsRuleOfLawImportance')}</strong>
              {t('nsRegulationContent')}
              <strong>{t('nsCodeResponsibility')}</strong>
              <div className='mt-6 font-bold'>{t('nsIntegrityChapter')}</div>
              <br />
              <div>
                <strong>2.1-1</strong> {t('nsIntegrityDuty')}
              </div>
              <div className='mt-4'>
                <strong>2.1-2</strong> {t('nsStandardsDuty')}
              </div>
            </>
          ),
          section: t('nsSection'),
        },
        {
          tag: t('princeEdwardIsland'),
          content: (
            <>
              <strong>{t('peiAdmissionTitle')}</strong> <br />
              {t('peiAdmissionContent')}
              <div className=' mt-6'>{t('peiJudgeContent')}</div>
              <div className=' mt-6'>
                <strong>{t('peiOathContent')}</strong>
              </div>
              <hr className='my-8' />
              <div className='mt-6 font-bold'>{t('peiLegalAct')}</div>
              <div className='mt-6 font-bold'>{t('peiPreface')}</div>
              <strong>{t('peiRuleOfLawImportance')}</strong>
              {t('peiRegulationContent')}
              <strong>{t('peiCodeResponsibility')}</strong>
              <div className='mt-6 font-bold'>{t('peiIntegrityChapter')}</div>
              <br />
              <div>
                <strong>2.1-1</strong> {t('peiIntegrityDuty')}
              </div>
              <div className='mt-4'>
                <strong>2.1-2</strong> {t('peiStandardsDuty')}
              </div>
            </>
          ),
          section: t('peiSection'),
        },
        {
          tag: t('newfoundlandLabrador'),
          content: (
            <>
              <strong>{t('nlSolicitorTitle')}</strong> <br />
              {t('nlSolicitorContent')}
              <div className=' mt-6'>{t('nlOathContent')}</div>
              <div className='mt-6 font-bold'>{t('nlLawSocietyAct')}</div>
              <hr className='my-8' />
              <div className='mt-6 font-bold'>{t('nlPreface')}</div>
              <strong>{t('nlRuleOfLawImportance')}</strong>
              {t('nlRegulationContent')}
              <strong>{t('nlCodeResponsibility')}</strong>
              <div className='mt-6 font-bold'>{t('nlIntegrityChapter')}</div>
              <br />
              <div>
                <strong>2.1-1</strong> {t('nlIntegrityDuty')}
              </div>
              <div className='mt-4'>
                <strong>2.1-2</strong> {t('nlStandardsDuty')}
              </div>
            </>
          ),
          section: t('nlSection'),
        },
      ],
      3: [
        {
          tag: t('yukon'),
          content: (
            <>
              <strong>{t('yukonOathTitle')}</strong> <br />
              {t('yukonOathContent')}
              <strong>{t('yukonRuleOfLawContent')}</strong>
            </>
          ),
          section: t('yukonSection'),
        },
        {
          tag: t('northwestTerritories'),
          content: (
            <>
              <strong>{t('nwtOathTitle')}</strong> <br />
              {t('nwtOathIntro')}
              <div className=' mt-6'>{t('nwtOathContent')}</div>
              <strong>{t('nwtIntegrityContent')}</strong>
              {t('nwtOathConclusion')}
              <div className='mt-6 font-bold'>{t('nwtLegalAct')}</div>
              <hr className='my-8' />
              <div className='mt-6 font-bold'>{t('nwtPreface')}</div>
              <strong>{t('nwtRuleOfLawImportance')}</strong>
              {t('nwtRegulationContent')}
              <strong>{t('nwtCodeResponsibility')}</strong>
              <div className='mt-6'>
                <strong>{t('nwtCodeGuidance')}</strong>{' '}
                {t('nwtCodeDescription')}
              </div>
              <div className='mt-6 font-bold'>{t('nwtIntegrityChapter')}</div>
              <br />
              <div>
                <strong>2.1-1</strong> {t('nwtIntegrityDuty')}
              </div>
              <div className='mt-4'>
                <strong>2.1-2</strong> {t('nwtStandardsDuty')}
              </div>
            </>
          ),
          section: t('nwtSection'),
        },
        {
          tag: t('nunavut'),
          content: (
            <>
              <strong>{t('nunavutOathTitle')}</strong> <br />
              {t('nunavutOathIntro')}
              <div className='mt-6'>
                {t('nunavutOathContent')}{' '}
                <strong>{t('nunavutIntegrityContent')}</strong>{' '}
                {t('nunavutOathConclusion')}
              </div>
              <div className='mt-6 font-bold'>{t('nunavutLegalAct')}</div>
              <hr className='my-8' />
              <div className='mt-6 font-bold'>{t('nunavutPreface')}</div>
              <strong>{t('nunavutRuleOfLawImportance')}</strong>
              {t('nunavutRegulationContent')}
              <strong>{t('nunavutCodeResponsibility')}</strong>
              <div className='mt-6 font-bold'>
                {t('nunavutIntegrityChapter')}
              </div>
              <br />
              <div>
                <strong>2.1-1</strong> {t('nunavutIntegrityDuty')}
              </div>
              <div className='mt-4'>
                <strong>2.1-2</strong> {t('nunavutStandardsDuty')}
              </div>
            </>
          ),
          section: t('nunavutSection'),
        },
      ],
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const currentData = getPageData()[currentPage]

  return (
    <div className='min-h-screen bg-white'>
      <Head>
        <title>{t('byLawsPageTitle')}</title>
        <meta name='description' content={t('byLawsPageDescription')} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <div className='bg-[#F5EFE0] py-16 pt-30'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-[#2B2B39] mb-6'>
            {t('bylaws')}
          </h1>
          <div className='text-[#000000] font-bold text-2xl'>
            {t('dutyToUphold')}
          </div>
        </div>
      </div>

      <motion.main
        ref={contentRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='max-w-7xl mx-auto px-4 md:px-8 py-12'
      >
        <div className='space-y-14'>
          {currentData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white border border-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300'
            >
              <div className='bg-[#C1351A] text-[#FEFBF6] text-base px-8 py-1 rounded-md mb-6 inline-block font-bold'>
                {card.tag}
              </div>
              <h3 className='font-normal text-[#5F5F75] text-lg mb-4'>
                {card.title}
              </h3>
              <div className='font-normal text-[#5F5F75] text-lg leading-relaxed mb-6'>
                {card.content}
              </div>
              <button className='text-[#5F5F75] text-base font-bold hover:underline transition-colors duration-200'>
                {card.section}
              </button>
            </motion.div>
          ))}
        </div>

        <div className='flex justify-start mt-16'>
          <Pagination
            totalPages={3}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
