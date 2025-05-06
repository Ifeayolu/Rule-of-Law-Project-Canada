import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Comments() {
  const router = useRouter()

  return (
    <div className='min-h-screen bg-[#fffcf7]'>
      <Head>
        <title>Comments | Rule of Law Canada</title>
        <meta name='robots' content='noindex, nofollow' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Navbar />

      <main className='pt-24 md:pt-32 max-w-6xl mx-auto px-4 pb-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <h1 className='text-2xl md:text-4xl font-bold text-[#2B2B39] mb-6'>
            Comments Access Restricted
          </h1>
          <p className='text-lg md:text-xl text-[#5F5F75] mb-8'>
            Thank you for your interest in viewing comments. We are currently
            reviewing submissions and will make them available soon.
          </p>
          <Link
            href='/'
            className='bg-[#C1351A] text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-full transition-all duration-300 hover:bg-red-800 hover:shadow-lg transform hover:scale-105 inline-block text-sm md:text-base'
          >
            Back to Home
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
