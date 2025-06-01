import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function HeroSection({ heroRef, heroInView }) {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div
      ref={heroRef}
      className={`mt-4 md:mt-18 text-center transition-all duration-1000 ${
        heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className='text-2xl md:text-4xl text-[#75625F] mb-8 font-bold px-4'>
        {t('callingAllLawyers')}
      </h2>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B39] max-w-4xl mx-auto '>
        {t('reaffirmCommitment')}
      </h1>
    </div>
  )
}
