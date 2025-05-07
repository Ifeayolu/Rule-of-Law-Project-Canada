import { useRouter } from 'next/router'

export default function HeroSection({ heroRef, heroInView }) {
  const router = useRouter()

  return (
    <div
      ref={heroRef}
      className={`mt-4 md:mt-18 text-center transition-all duration-1000 ${
        heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className='text-2xl md:text-4xl text-[#75625F] mb-5 font-bold px-4'>
        Calling All Canadian Lawyers!
      </h2>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B2B39] max-w-4xl mx-auto '>
        Reaffirm Your Commitment to the Rule of Law in Canada
      </h1>
      <div className='mt-18'>
        <button
          onClick={() => router.push('/pledge')}
          className='bg-[#C1351A] hover:bg-red-800 text-white font-bold px-6 md:px-8 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm md:text-base'
        >
          Take the Pledge
        </button>
      </div>
    </div>
  )
}
