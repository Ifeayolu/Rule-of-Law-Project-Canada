import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PledgeForm from '@/components/pledge/PledgeForm'
import ThankYouModal from '@/components/pledge/ThankYouModal'

export default function Pledge() {
  const router = useRouter()
  const [formData, setFormData] = React.useState({
    name: '',
    companyName: '',
    email: '',
    province: '',
    comment: '',
    receiveUpdates: false,
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [showThankYou, setShowThankYou] = React.useState(false)
  const [pledgeCount, setPledgeCount] = React.useState(0)

  React.useEffect(() => {
    const fetchPledgeCount = async () => {
      try {
        const response = await fetch('/api/pledge')
        const data = await response.json()
        setPledgeCount(data.count || 0)
      } catch (error) {
        console.error('Error fetching pledge count:', error)
      }
    }

    fetchPledgeCount()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/pledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setSuccess(true)

      setFormData({
        name: '',
        companyName: '',
        email: '',
        province: '',
        comment: '',
        receiveUpdates: false,
      })

      setPledgeCount((prev) => prev + 1)

      setShowThankYou(true)
    } catch (error) {
      console.error('Error submitting pledge:', error)
      setError('There was a problem submitting your pledge. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseModal = () => {
    setShowThankYou(false)
  }

  return (
    <div className='min-h-screen'>
      <Head>
        <title>Take the Pledge | Rule of Law Canada</title>
        <meta
          name='description'
          content='Pledge your support for the Rule of Law in Canada'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Navbar />

      <main className='bg-[#fffcf7] pt-20'>
        <div className='relative text-white py-8 md:py-16 px-4 md:px-12'>
          <Image
            src='/images/pledgeRectangle.png'
            alt='Pledge Rectangle'
            width={100}
            height={100}
            className='absolute inset-0 w-full h-[600px] md:h-[1130px] object-cover'
            priority
            sizes='100vw'
          />
          <div className='max-w-6xl mx-auto relative z-10'>
            <div className='flex flex-col items-center'>
              <div className='w-full'>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='text-2xl md:text-3xl font-bold text-center mt-8 md:mt-40'
                >
                  Fill out this form to take the Rule of Law Pledge
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='text-xl text-center mt-4'
                >
                  Your pledge will be counted and will be made public.
                </motion.h2>
              </div>

              <div className='w-full md:w-2/3 lg:w-1/2'>
                <PledgeForm
                  formData={formData}
                  isSubmitting={isSubmitting}
                  error={error}
                  success={success}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-50'>
          <Footer />
        </div>
      </main>

      <ThankYouModal
        isOpen={showThankYou}
        pledgeCount={pledgeCount}
        onClose={handleCloseModal}
      />
    </div>
  )
}
