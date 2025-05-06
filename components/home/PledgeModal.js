import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { formatPledgeCount } from '@/utils/helpers'

export default function PledgeModal({
  modalRef,
  modalInView,
  pledgePercentage,
  pledgeCount,
}) {
  return (
    <div
      ref={modalRef}
      className={`static md:absolute md:-top-53 right-0 flex flex-col md:flex-row w-full transition-all duration-1000 ${
        modalInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
    >
      <div className='w-full md:w-5/6'>
        <Image
          src='/images/eastBlock1.png'
          alt='East Block'
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
            Pledge to reaffirm your support for the rule of law in Canada
          </h3>
        </div>
        <h3 className='font-bold text-2xl mb-3 text-[#2B2B39]'>
          Take the Pledge!
        </h3>
        <p className='text-sm text-gray-600 mb-4'>
          As Canadian lawyers, we have taken an oath to champion the rule of
          law. Our democracy stands on the bedrock of an independent judicial
          system. Canadians are proud of our democratic institutions, but we
          know how quickly things can change. Join us in reaffirming our
          commitment to the rule of law and all who work to protect it.
        </p>
        <div className='flex items-center gap-2 mb-1'>
          <Image
            src='/images/map-marker.svg'
            width={12}
            height={16}
            alt='map marker'
          />
          <h2 className='font-normal text-base text-[#5F5F75]'>Canada</h2>
        </div>
        <div className='w-full h-1 bg-[#F2EAE1] mb-4 rounded-full'>
          <div
            className='h-full bg-[#C1351A] rounded-full transition-all duration-1000 ease-out'
            style={{
              width: `${pledgePercentage}%`,
              minWidth: pledgePercentage > 0 ? '2px' : '0',
            }}
          ></div>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <button className='bg-[#C1351A] text-white text-sm font-bold px-2 py-1 rounded-md flex items-center gap-2'>
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
