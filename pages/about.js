import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function About() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: principlesRef, inView: principlesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#fffcf7] to-[#fffcf7]'>
      <Head>
        <title>About | Rule of Law Project Canada</title>
        <meta
          name='description'
          content='Learn about the Rule of Law Project Canada and our mission to protect judicial independence'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className='pt-28 mx-auto max-w-7xl px-6 md:px-8'>
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='py-12 md:py-16'
        >
          <h1 className='text-3xl md:text-5xl font-bold text-[#2B2B39] mb-18'>
            Introducing the Rule of Law Project
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            <div className='lg:col-span-3 space-y-6 text-[#5F5F75] text-lg leading-relaxed'>
              <p>
                Canadians have long taken pride in the fact that they live in a
                free and democratic society that is governed by the Rule of Law.
                Members of the legal profession have worked hard to ensure that
                individual rights are respected; that governments across Canada
                cannot discriminate against people for their political or other
                beliefs; that everyone - including government - is accountable
                to the law; and that no one is above the law. This system
                requires that legal cases be decided according to the law, by an
                independent and fair judiciary. However, in recent months we
                have seen how fragile the Rule of Law can be and how quickly it
                can be eroded. Could the Rule of Law be attacked and eroded in
                Canada? The answer is yes, it could. The Rule of Law, like
                democracy itself, is more than a concept or ideal. Its very
                existence depends on the purposeful actions of government and
                citizens alike. The Rule of Law and democracy both require
                action.
              </p>

              <p>
                These questions prompted a conversation between a small group of
                lawyers and academics about what we Canadians can collectively
                do to protect, promote, and nourish the Rule of Law here in
                Canada. While there will be more to come, we thought we could
                start with this simple idea: Canadian lawyers should unite and
                collectively pledge to uphold the Rule of Law. This group has
                worked together through frank and supportive dialogue to draft a
                pledge for legal professionals that reads:
              </p>

              <div className='space-y-8 mt-8'>
                <div>
                  <p className='font-bold text-lg text-[#5F5F75]'>
                    1. Protection of the judicial system
                  </p>
                  <p>
                    We affirm our obligation to encourage respect for the
                    administration of justice, and commit to protecting the
                    Canadian judicial system and all of its participants from
                    undue interference of any kind.
                  </p>
                </div>

                <div>
                  <p className='font-bold text-lg text-[#5F5F75]'>
                    2. Legal work supporting the rule of law
                  </p>
                  <p>
                    We will seek to ensure access to justice for litigants where
                    the rule of law in Canada is at stake, including through pro
                    bono work where necessary.
                  </p>
                </div>

                <div>
                  <p className='font-bold text-lg text-[#5F5F75]'>
                    3. An attack on one is an attack on all
                  </p>
                  <p>
                    We commit to supporting members of this Coalition of
                    Canadian Lawyers in their work to uphold the principles in
                    this document. If any coalition member becomes subject to
                    undue harm or interference by any arm of any Canadian
                    government as a result of its efforts to uphold the above
                    principles, we all commit to supporting that member’s
                    resistance efforts.
                  </p>
                </div>
              </div>

              <p>
                Lawyers across Canada take an oath when they are called to the
                Bar. Most provincial and territorial oaths for lawyers contain a
                commitment to uphold the rule of law and the administration of
                justice. In Ontario, lawyers swear:
              </p>

              <p className=' text-[#5F5F75]'>
                I shall not pervert the law to favour or prejudice any one, but
                in all things I shall conduct myself honestly and with integrity
                and civility. I shall seek to ensure access to justice and
                access to legal services. I shall seek to improve the
                administration of justice.{' '}
                <strong>
                  I shall champion the rule of law and safeguard the rights and
                  freedoms of all persons.
                </strong>
              </p>

              <p>
                In light of these oaths, the pledge may seem redundant. We wish
                it were. We cannot take the Rule of Law for granted. We must be
                vigilant in our role as guardians of a free and democratic
                society. Through this pledge, we reaffirm the commitments we
                made in our oaths. We also commit to protecting the independence
                of our judicial system and will support any pledge member’s
                resistance efforts if they become subject to undue harm or
                interference by any arm of any Canadian government. Instead of
                being redundant, taking the pledge is a simple, yet necessary
                reminder and confirmation of our commitment to our roles as
                lawyers. We support the foundations of our Canadian democracy.
              </p>

              <p>
                We are calling all Canadian lawyers to join us and sign this
                pledge. Together we can protect the institutions that protect
                us.
              </p>
              <div>
                <p>Sandra Barton</p>
                <p>Sheila Block</p>
                <p>Gerald Chan</p>
                <p>Jennifer Orange</p>
                <p>Lindsay Scott</p>
                <p>Jake Okechukwu Effoduh</p>
              </div>

              <div className='text-center mt-30 mb-10'>
                <Link
                  href='/pledge'
                  className='inline-block bg-[#C1351A] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#a12e17] transition-colors duration-300'
                >
                  Take the Pledge
                </Link>
              </div>
            </div>

            <div className='lg:col-span-2 space-y-4 mt-100 hidden lg:block image-sidebar'>
              <div className='grid grid-cols-2 gap-30 relative'>
                <div className='relative h-64 md:h-70 -mt-8 w-[270px]'>
                  <Image
                    src='/images/courthouse-exterior.png'
                    alt='Courthouse exterior'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>

                <div className='relative h-32 md:h-48 mt-30 w-[270px]'>
                  <Image
                    src='/images/scales-of-justice.png'
                    alt='Scales of justice'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-28 -mt-16'>
                <div className='relative h-32 md:h-48 w-[270px]'>
                  <Image
                    src='/images/superior.png'
                    alt='Superior court'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
                <div className='relative h-64 md:h-70 w-[270px] mt-16'>
                  <Image
                    src='/images/canadian-leaf.png'
                    alt='Canadian maple leaf'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
