import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { formatPledgeCount } from '@/utils/helpers'

export default function PledgeModal({
  modalRef,
  modalInView,
  pledgePercentage,
  pledgeCount,
  commentsCount,
}) {
  const { t } = useTranslation()
  const router = useRouter()

  const handleCommentsClick = () => {
    router.push('/comments')
  }

  return (
    <div
      ref={modalRef}
      className={`static md:absolute md:-top-6 right-0 flex flex-col md:flex-row w-full transition-all duration-1000 ${
        modalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className='w-full md:w-5/6'>
        <Image
          src='/images/supremeCourtImage2.png'
          alt='Supreme Court'
          width={549}
          height={310}
          className='w-full h-full object-cover rounded-md'
        />
      </div>

      <div className='bg-white rounded-md shadow-lg w-full md:w-5/6 px-6 py-3 z-10 mt-4 md:mt-0'>
        <div className='flex items-center gap-2 mb-4'>
          <span>
            <Image
              src='/images/paperPlane.svg'
              width={18}
              height={18}
              alt='paperPlane'
            />
          </span>
          <h3 className='font-normal text-md text-[#5F5F75]'>
            {t('pledgeToReaffirm')}
          </h3>
        </div>
        <h3 className='font-bold text-2xl mb-3 text-[#2B2B39]'>
          {t('takePledgeExclamation')}
        </h3>
        <p className='text-sm text-gray-600 mb-4'>{t('democracyStands')}</p>
        <div className='flex items-center gap-2 mt-6'>
          <Image
            src='/images/map-marker.svg'
            width={12}
            height={16}
            alt='map marker'
          />
          <h2 className='font-normal text-base text-[#5F5F75]'>
            {t('canada')}
          </h2>
        </div>
        <div className='w-full h-1 bg-[#F2EAE1] mt-1 rounded-full'>
          <div
            className='h-full bg-[#C1351A] rounded-full transition-all duration-1000 ease-out'
            style={{
              width: `${pledgePercentage}%`,
              minWidth: pledgePercentage > 0 ? '2px' : '0',
            }}
          ></div>
        </div>

        <div className='flex items-center justify-between mt-8'>
          <div className='flex items-center gap-3'>
            <button
              onClick={handleCommentsClick}
              className='bg-[#C1351A] text-white text-sm font-bold px-3 py-1 rounded-md flex items-center gap-2'
            >
              <Image
                src='/images/peopleLaw.png'
                width={13}
                height={14}
                alt='peopleLaw icon'
              />
              <AnimatePresence mode='wait'>
                <motion.span
                  key={pledgeCount}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {formatPledgeCount(pledgeCount)}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
