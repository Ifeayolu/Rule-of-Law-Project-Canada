import React from 'react'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { provinceMap } from '@/data/provinces'

export default function AdminDashboard() {
  const [comments, setComments] = React.useState([])
  const [pledges, setPledges] = React.useState({ total: 0, withComments: 0 })
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [password, setPassword] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [exportLoading, setExportLoading] = React.useState(false)
  const [exportError, setExportError] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)

  React.useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth')
    if (adminAuth === 'true') {
      setIsAuthenticated(true)
      fetchData()
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setPasswordError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        setIsAuthenticated(true)
        localStorage.setItem('adminAuth', 'true')
        fetchData()
      } else {
        setPasswordError('Invalid password')
      }
    } catch (error) {
      console.error('Login error:', error)
      setPasswordError('Something went wrong. Please try again.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuth')
    setComments([])
    setPledges({ total: 0, withComments: 0 })
    setPassword('')
    setShowPassword(false)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const commentsResponse = await fetch('/api/comments')
      const commentsData = await commentsResponse.json()

      if (!commentsResponse.ok) {
        throw new Error(commentsData.message || 'Failed to fetch comments')
      }

      setComments(commentsData.comments)

      const statsResponse = await fetch('/api/pledge')
      const statsData = await statsResponse.json()

      if (!statsResponse.ok) {
        throw new Error(
          statsData.message || 'Failed to fetch pledge statistics'
        )
      }

      setPledges({
        total: statsData.count || 0,
        withComments: statsData.commentsCount || 0,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Failed to load data. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleExportPDF = async () => {
    setExportError('')
    setExportLoading(true)

    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      })

      doc.setFontSize(18)
      doc.text('Pledge Data Export', 14, 15)

      const today = new Date().toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      doc.setFontSize(10)
      doc.text(`Generated: ${today}`, 14, 22)

      const tableHeaders = [
        'Name',
        'Email',
        'Company',
        'Province',
        'Comment',
        'Receive Updates',
        'Date',
      ]

      const tableData = comments.map((comment) => [
        comment.name || '',
        comment.email || '',
        comment.companyName || '',
        provinceMap[comment.province] || comment.province || '',
        comment.comment || '',
        comment.receiveUpdates ? 'Yes' : 'No',
        new Date(comment.createdAt).toLocaleDateString('en-CA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      ])

      autoTable(doc, {
        startY: 30,
        head: [tableHeaders],
        body: tableData,
        headStyles: {
          fillColor: [193, 53, 26],
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          halign: 'center',
        },
        styles: {
          fontSize: 9,
          cellPadding: 3,
          overflow: 'linebreak',
          lineWidth: 0.1,
          lineColor: [80, 80, 80],
        },
        columnStyles: {
          0: { cellWidth: 25 },
          1: { cellWidth: 35 },
          2: { cellWidth: 25 },
          3: { cellWidth: 25 },
          4: { cellWidth: 65 },
          5: { cellWidth: 20 },
          6: { cellWidth: 25 },
        },
        margin: { top: 30, right: 14, bottom: 20, left: 14 },
        alternateRowStyles: {
          fillColor: [245, 245, 245],
        },
        didDrawCell: (data) => {
          if (data.section === 'body') {
            doc.setDrawColor(210, 210, 210)
            doc.setLineWidth(0.1)
            doc.line(
              data.cell.x,
              data.cell.y,
              data.cell.x + data.cell.width,
              data.cell.y
            )
            doc.line(
              data.cell.x,
              data.cell.y + data.cell.height,
              data.cell.x + data.cell.width,
              data.cell.y + data.cell.height
            )
          }
        },
        didDrawPage: (data) => {
          const pageCount = doc.internal.getNumberOfPages()
          doc.setFontSize(8)
          doc.text(
            `Page ${data.pageNumber} of ${pageCount}`,
            data.settings.margin.left,
            doc.internal.pageSize.height - 10
          )
        },
      })

      doc.save('pledges-export.pdf')
    } catch (error) {
      console.error('Export error:', error)
      setExportError(`Error generating PDF: ${error.message}`)
    } finally {
      setExportLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-[#fffcf7] flex flex-col'>
      <Head>
        <title>Admin Dashboard | Rule of Law Canada</title>
        <meta name='robots' content='noindex, nofollow' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Navbar />

      {!isAuthenticated ? (
        <main className='flex-1 flex items-center justify-center px-4 py-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='w-full max-w-xl bg-white p-10 rounded-lg shadow-lg mx-4'
          >
            <h1 className='text-3xl font-bold text-[#2B2B39] mb-8 text-center'>
              Admin Login
            </h1>

            <form onSubmit={handleLogin}>
              <div className='mb-6'>
                <label
                  htmlFor='password'
                  className='block text-base font-bold text-black mb-3'
                >
                  Password
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-4 border border-gray-300 rounded focus:border-[#C1351A] focus:ring-1 focus:ring-[#C1351A] focus:outline-none text-black text-lg pr-12'
                    required
                  />
                  <button
                    type='button'
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200'
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className='text-red-500 text-sm mt-2'>{passwordError}</p>
                )}
              </div>

              <button
                type='submit'
                className='w-full bg-[#C1351A] text-white font-bold py-4 px-4 rounded transition-all duration-300 hover:bg-red-800 text-lg mt-4'
              >
                Login
              </button>
            </form>
          </motion.div>
        </main>
      ) : (
        <main className='pt-24 md:pt-32 px-18 pb-12'>
          <div className='flex flex-wrap gap-2 justify-between items-center mb-8'>
            <h1 className='text-2xl md:text-4xl font-bold text-[#2B2B39]'>
              Admin Dashboard
            </h1>

            <div className='flex flex-wrap gap-2'>
              <button
                onClick={handleExportPDF}
                disabled={exportLoading}
                className='bg-[#C1351A] text-white font-bold px-4 py-2 rounded transition-all duration-300 hover:bg-red-800'
              >
                {exportLoading ? 'Exporting...' : 'Download PDF'}
              </button>

              <button
                onClick={handleLogout}
                className='bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded transition-all duration-300 hover:bg-gray-300'
              >
                Logout
              </button>
            </div>
          </div>

          {exportError && (
            <div className='text-red-600 mb-4'>{exportError}</div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold text-gray-600 mb-2'>
                Total Pledges
              </h3>
              <p className='text-3xl font-bold text-[#2B2B39]'>
                {pledges.total}
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold text-gray-600 mb-2'>
                Comments Received
              </h3>
              <p className='text-3xl font-bold text-[#2B2B39]'>
                {pledges.withComments}
              </p>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-bold text-[#2B2B39] mb-4'>
              Comments ({comments.length})
            </h2>

            {loading && (
              <div className='flex justify-center items-center h-32'>
                <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#C1351A]'></div>
              </div>
            )}

            {error && (
              <div className='text-center text-red-600 mb-4'>{error}</div>
            )}

            {!loading && comments.length === 0 && (
              <p className='text-gray-500 text-center py-4'>
                No comments found.
              </p>
            )}

            <div className='space-y-4'>
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className='border rounded-lg p-4 bg-gray-50'
                >
                  <div className='flex flex-col md:flex-row justify-between mb-2'>
                    <div>
                      <h3 className='font-bold text-[#2B2B39]'>
                        {comment.name}
                      </h3>
                      <p className='text-sm text-gray-600'>{comment.email}</p>
                      {comment.companyName && (
                        <p className='text-sm text-gray-600'>
                          Company: {comment.companyName}
                        </p>
                      )}
                      <p className='text-sm text-gray-600'>
                        Receive Updates: {comment.receiveUpdates ? 'Yes' : 'No'}
                      </p>
                    </div>

                    <div className='text-right md:text-right mt-2 md:mt-0'>
                      <p className='text-sm text-[#5F5F75] font-semibold'>
                        {provinceMap[comment.province] || comment.province}
                      </p>
                      <p className='text-sm text-[#5F5F75] font-medium'>
                        {new Date(comment.createdAt).toLocaleDateString(
                          'en-CA',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </p>
                    </div>
                  </div>

                  <div className='mt-2 border-t pt-2'>
                    <p className='whitespace-pre-wrap text-gray-800'>
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}
