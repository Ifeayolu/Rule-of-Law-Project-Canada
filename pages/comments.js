import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { provinceMap } from '@/data/provinces'
import Image from 'next/image'

export default function Comments() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = React.useState(1)
  const [comments, setComments] = React.useState([])
  const [pledgeCount, setPledgeCount] = React.useState(0)
  const [commentsCount, setCommentsCount] = React.useState(0)
  const [loading, setLoading] = React.useState(true)

  const commentsPerPage = 4

  React.useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)

      const statsResponse = await fetch('/api/pledge')
      if (statsResponse.ok) {
        const statsData = await statsResponse.json()
        setPledgeCount(statsData.count || 0)
        setCommentsCount(statsData.commentsCount || 0)

        if (statsData.pledges && Array.isArray(statsData.pledges)) {
          setComments(statsData.pledges)
        } else if (statsData.comments && Array.isArray(statsData.comments)) {
          setComments(statsData.comments)
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const totalPages = Math.ceil(comments.length / commentsPerPage)
  const startIndex = (currentPage - 1) * commentsPerPage
  const endIndex = startIndex + commentsPerPage
  const currentComments = comments.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const Pagination = () => {
    if (totalPages <= 1) return null

    const getPageNumbers = () => {
      const delta = 2
      const range = []

      for (
        let i = Math.max(2, currentPage - delta);
        i <= Math.min(totalPages - 1, currentPage + delta);
        i++
      ) {
        range.push(i)
      }

      if (currentPage - delta > 2) {
        range.unshift('...')
      }
      if (currentPage + delta < totalPages - 1) {
        range.push('...')
      }

      range.unshift(1)
      if (totalPages !== 1) {
        range.push(totalPages)
      }

      return range
    }

    return (
      <div className='flex items-center justify-center space-x-3 mt-12'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='px-6 py-2 text-sm font-bold text-[#5F5F75] bg-[#F2EAE1] rounded-lg hover:bg-[#F2EAE1] disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
        >
          Prev
        </button>

        {getPageNumbers().map((pageNum, index) => (
          <button
            key={index}
            onClick={() =>
              typeof pageNum === 'number' && handlePageChange(pageNum)
            }
            disabled={pageNum === '...'}
            className={`w-10 h-10 text-sm font-bold rounded-full transition-colors ${
              currentPage === pageNum
                ? 'bg-[#C1351A] text-white '
                : pageNum === '...'
                ? 'cursor-default text-gray-400'
                : 'text-gray-600 bg-[#F2EAE1] hover:bg-[#F2EAE1]'
            }`}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='px-4 py-2 text-sm font-bold text-white bg-[#C1351A] rounded-lg hover:bg-[#A02E17] disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
        >
          Next
        </button>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-[#fffcf7] flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#C1351A] mx-auto mb-4'></div>
          <p className='text-[#5F5F75]'>Loading comments...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[#fffcf7] flex flex-col'>
      <Head>
        <title>Pledges | Rule of Law Canada</title>
        <meta
          name='description'
          content='View all pledges for the Rule of Law in Canada'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Navbar />

      <main className='flex-1 flex flex-col pt-24 md:pt-32 max-w-6xl mx-auto pb-12 w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12'
        >
          <div className='flex items-center justify-between mb-8'>
            <div>
              <h2 className='text-xl md:text-2xl font-bold text-[#2B2B39] mb-3'>
                Comments
              </h2>
              <h1 className='text-2xl md:text-4xl font-bold text-[#2B2B39] mb-4'>
                Pledgers
              </h1>
            </div>
          </div>
        </motion.div>

        {comments.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-[#5F5F75] text-lg'>
              No pledges yet. Be the first to take the pledge!
            </p>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
              {currentComments.map((comment, index) => (
                <motion.div
                  key={comment._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white rounded-lg p-6 shadow-sm border border-gray-100'
                >
                  {comment.comment && (
                    <div className='mb-6 max-h-24 overflow-y-auto pr-2 no-scrollbar'>
                      <p className='text-[#2B2B39] leading-relaxed  whitespace-pre-wrap'>
                        {comment.comment}
                      </p>
                    </div>
                  )}

                  <div className='flex items-start gap-4 pt-6'>
                    <Image
                      src='/images/avatar.png'
                      alt='User avatar'
                      width={48}
                      height={48}
                      className='rounded-full object-cover flex-shrink-0 mt-3'
                    />

                    <div className='flex-1'>
                      <h3 className='font-bold text-[#2B2B39] text-lg mb-1'>
                        {comment.name || 'Anonymous'}
                      </h3>
                      {comment.companyName && (
                        <p className='text-sm text-[#5F5F75] mb-1'>
                          {comment.companyName}
                        </p>
                      )}
                      {comment.province && (
                        <div className='flex items-center gap-2'>
                          <Image
                            src='/images/map-marker.svg'
                            alt='Location pin'
                            width={14}
                            height={14}
                            className='object-contain'
                          />
                          <span className='text-sm text-[#5F5F75]'>
                            {provinceMap[comment.province] || comment.province}
                          </span>
                        </div>
                      )}

                      {comment.createdAt && (
                        <div className='mt-2 text-xs text-gray-400'>
                          Pledged on{' '}
                          {new Date(comment.createdAt).toLocaleDateString(
                            'en-CA',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className='mt-auto pt-12'>
              <Pagination />
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
