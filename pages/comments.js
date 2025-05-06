// import React, { useState, useEffect } from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
// import { provinceMap } from '@/data/provinces'
// import UserAvatar from '@/utils/helpers'

// export default function Comments() {
//   const [comments, setComments] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await fetch('/api/comments')
//         const data = await response.json()

//         if (!response.ok) {
//           throw new Error(data.message || 'Failed to fetch comments')
//         }

//         setComments(data.comments)
//       } catch (error) {
//         console.error('Error fetching comments:', error)
//         setError('Failed to load comments. Please try again later.')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchComments()
//   }, [])

//   return (
//     <div className='min-h-screen bg-[#fffcf7]'>
//       <Head>
//         <title>Comments | Rule of Law Canada</title>
//         <meta
//           name='description'
//           content='View comments from supporters of the Rule of Law in Canada'
//         />
//         <link rel='icon' href='/favicon.ico' />
//         <meta name='viewport' content='width=device-width, initial-scale=1' />
//       </Head>

//       <Navbar />

//       <main className='pt-24 md:pt-32 max-w-6xl mx-auto px-4 pb-12'>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className='text-center mb-8 md:mb-12'
//         >
//           <h1 className='text-2xl md:text-4xl font-bold text-[#2B2B39] mb-2 md:mb-4'>
//             Comments from Our Pledgers
//           </h1>
//           <p className='text-lg md:text-xl text-[#5F5F75]'>
//             Read what people are saying about the Rule Of Law
//           </p>
//         </motion.div>

//         {loading && (
//           <div className='flex justify-center items-center h-64'>
//             <div className='animate-spin rounded-full h-10 w-10 md:h-12 md:w-12 border-b-2 border-[#C1351A]'></div>
//           </div>
//         )}

//         {error && <div className='text-center text-red-600 mb-8'>{error}</div>}

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className='grid gap-4 md:gap-6'
//         >
//           {comments.length === 0 && !loading && (
//             <div className='text-center text-[#5F5F75] py-8 md:py-12'>
//               No comments yet. Be the first to share your thoughts!
//             </div>
//           )}

//           {comments.map((comment, index) => (
//             <motion.div
//               key={comment._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               className='bg-gray-100 rounded-lg shadow-md p-4 md:p-6'
//             >
//               <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0 mb-3 md:mb-4'>
//                 <div className='flex items-center gap-3'>
//                   <UserAvatar />

//                   <div>
//                     <h3 className='font-bold text-sm md:text-base text-[#5d5d60]'>
//                       {comment.name}
//                     </h3>
//                   </div>
//                 </div>

//                 <div className='flex flex-col items-end'>
//                   <p className='text-xs md:text-sm font-bold text-[#5F5F75]'>
//                     {provinceMap[comment.province] || comment.province}
//                   </p>
//                   <span className='text-xs md:text-sm font-medium text-[#5F5F75]'>
//                     {new Date(comment.createdAt).toLocaleDateString('en-CA', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric',
//                     })}
//                   </span>
//                 </div>
//               </div>
//               <p className='text-sm md:text-base font-medium text-[#2B2B39] whitespace-pre-wrap'>
//                 {comment.comment}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {comments.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className='text-center mt-8 md:mt-12'
//           >
//             <Link
//               href='/pledge'
//               className='bg-[#C1351A] text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-full transition-all duration-300 hover:bg-red-800 hover:shadow-lg transform hover:scale-105 inline-block text-sm md:text-base'
//             >
//               Add Your Voice
//             </Link>
//           </motion.div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   )
// }

import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Comments() {
  const router = useRouter()

  // Option 1: Redirect to homepage immediately
  // useEffect(() => {
  //   router.push('/')
  // }, [router])

  // Option 2: Show access denied message
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
