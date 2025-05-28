import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const Pagination = ({ totalPages = 3, currentPage = 1, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber)
    }
  }

  return (
    <div className='flex items-center justify-between w-full py-8'>
      <div className='flex items-center space-x-2'>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1
          const isActive = pageNumber === currentPage

          return (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${
                isActive
                  ? 'bg-[#C1351A] text-white'
                  : 'bg-[#F2EAE1] text-[#5F5F75] hover:bg-gray-[#F2EAE1] cursor-pointer'
              }`}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>

      <div className='text-base text-[#5F5F75] font-bold'>
        {currentPage} - {totalPages} of 12 By-Laws
      </div>
    </div>
  )
}

export default function ProvincialByLaws() {
  const [currentPage, setCurrentPage] = React.useState(1)

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pageData = {
    1: [
      {
        tag: 'Ontario',
        title:
          '21. (1) The required oath for an applicant for the issuance of a licence to practise law in Ontario as a barrister and solicitor is as follows:',
        content: (
          <>
            I … accept the honour and privilege, duty and responsibility of
            practising law as a barrister and solicitor in the Province of
            Ontario. I shall protect and defend the rights and interests of such
            persons as may employ me. I shall conduct all cases faithfully and
            to the best of my ability. I shall neglect no one’s interest and
            shall faithfully serve and diligently represent the best interests
            of my client. I shall not refuse causes of complaint reasonably
            founded, nor shall I promote suits upon frivolous pretences. I shall
            not pervert the law to favour or prejudice any one, but in all
            things I shall conduct myself honestly and with integrity and
            civility. I shall seek to ensure access to justice and access to
            legal services. I shall seek to improve the administration of
            justice.
            <strong>
              I shall champion the rule of law and safeguard the rights and
              freedoms of all persons.
            </strong>
            I shall strictly observe and uphold the ethical standards that
            govern my profession.  All this I do swear or affirm to observe and
            perform to the best of my knowledge and ability.
          </>
        ),
        section: 's. 21(1) of By Law 4',
      },
      {
        tag: 'Alberta',
        title: 'Official oath',
        content: (
          <div>
            <strong>2</strong> When by a statute of Alberta a person is required
            to take an official oath on
            <br />
            <br />
            <div className='ml-4'>
              <strong>(a)</strong> being appointed to an office other than that
              of judge or justice of the peace, or
              <br />
              <strong>(b)</strong> being admitted to a profession or calling,
            </div>
            <br />
            the oath shall be taken in the following form:
            <br />
            <br />
            <div className='italic bg-gray-50 p-4 border-l-4 border-[#C1351A] rounded'>
              I, swear that I will diligently, faithfully and to the best of my
              ability execute according to law the office of
              <br />
              <br />
              So help me God.
            </div>
            <br />
            RSA 1980 cO‑1 s2
          </div>
        ),
        section:
          's.1(2), Oaths of Office Act, as prescribed by s. 44(2)(a) of the Legal Profession Act',
      },
      {
        tag: 'British Columbia',
        content: (
          <>
            BARRISTERS AND SOLICITORS OATH: Do you sincerely promise and swear
            (or affirm) that you will diligently, faithfully and to the best of
            your ability execute the offices of Barrister and Solicitor; that
            you will not promote suits upon frivolous pretences; that you will
            not pervert the law to favour or prejudice anyone; but in all things
            conduct yourself truly and with integrity; and
            <strong>
              that you will uphold the rule of law and the rights and freedoms
              of all persons according to the laws of Canada and of the Province
              of British Columbia, including the Constitution, which recognizes
              and affirms the Aboriginal and treaty rights of First Nations,
              Inuit and Métis peoples.
            </strong>
          </>
        ),
        section:
          'Oath per s. 2-84(2)(a) of the Law Society of British Columbia’s rules',
      },
      {
        tag: 'Saskatchewan',
        title: 'PREFACE',
        content: (
          <>
            <strong>
              The Rule of Law is a cornerstone of the Constitution and Canadian
              society. Lawyers are essential participants in a justice system
              that advances the Rule of Law.
            </strong>
            They represent the interests of their clients, are members of a
            profession and are officers of the Court. They enjoy a unique and
            privileged position in society.
            <strong>
              Lawyers have a professional and ethical responsibility to serve
              their clients, the profession and the judicial system in terms
              that protect and promote their clients and the public interest.
            </strong>
            <div className='mt-6'>
              This Code should not be construed as all-encompassing or as
              limiting other duties imperative to the protection of the public,
              and the public interest generally. Instead, this Code is intended
              to articulate those immutable ethical principles that assure a
              philosophy where the legal profession is dedicated to the high
              standards of ethical behaviour that are required, and must evolve
              over time in a changing society.
            </div>
            <div className='mt-6 font-bold'>
              Law Society of Saskatchewan Code of Professional Conduct
            </div>
            <hr className='my-8' />I DO SOLEMNLY SWEAR: (or affirm) THAT in
            accepting the honour, privilege and duty of practising law in the
            Province of Saskatchewan,.
            <strong>
              I will diligently, faithfully and to the best of my ability
              discharge the duties of my office and support the Rule of Law.
            </strong>
            I will seek to improve the administration of justice and uphold and
            maintain the interests of my fellow citizens according to the laws
            in force in the Province of Saskatchewan.  I will conduct myself
            honestly and with integrity and civility, and will strictly observe
            and uphold the ethical standards that govern my profession. SO HELP
            ME GOD.  (delete if affirmed)
          </>
        ),
        section:
          'Form A-14 read with r. 715 of the Law Society of Saskatchewan Rules',
      },
      {
        tag: 'Quebec',
        title: 'Preamble',
        content: (
          <>
            WHEREAS a lawyer is a servant of justice; <br />
            WHEREAS the practice of the profession of lawyer is based on the
            following values and principles which a lawyer must take into
            consideration in all circumstances: <br />
            (1) compliance with legal provisions and preservation of the rule of
            law; <br />
            (2) access to justice;
            <div className='mt-6'>
              PRELIMINARY PROVISIONS
              <br />
              1. This code sets out general and specific duties a lawyer owes to
              the public, to clients, to the administration of justice and to
              the profession. <br />
              O.C. 129-2015, s. 1.
            </div>
            <div className='mt-6'>
              2. This code applies to every lawyer, regardless of the manner in
              which he engages in his professional activities. This code also
              applies, with the necessary modifications, to every lawyer acting
              in respect of a recourse or dispute that concerns him personally.{' '}
              <br />
              It applies in addition to any other rule of professional conduct
              related to the exercise, by the lawyer, of any other activity, in
              particular, a job, a function, an office or the operation of an
              enterprise.
            </div>
            <div className='mt-6'>
              12. A lawyer must support respect for the rule of law. However, he
              may, for good reason and by legitimate means, criticize a legal
              provision, contest the interpretation or application thereof, or
              seek to have it repealed, amended or replaced.
            </div>
          </>
        ),
        section: 'Code of Professional Conduct of Lawyers',
      },
    ],
    2: [
      {
        tag: 'Nova Scotia',
        content: (
          <>
            <strong>Oath or affirmation on Admission</strong> <br />
            3.9.5 Every person being called to the Bar shall swear or affirm the
            following Oath or Affirmation on Admission to the Bar:
            <div className='italic mt-2'>
              “I, [name], swear/affirm that as a lawyer, I shall, to the best of
              my knowledge and ability, conduct all matters and proceedings
              faithfully, honestly and with integrity. I shall support the Rule
              of Law and uphold and seek to improve the administration of
              justice. I shall abide by the ethical standards and rules
              governing the practice of law in Nova Scotia.”
            </div>
            <div className='mt-6 font-bold'>
              Nova Scotia Barristers’ Society Regulations, r. 3.9.5
            </div>
            <hr className='my-8' />
            <div className='mt-6 font-bold'>Preface</div>
            <strong>
              One of the hallmarks of a free and democratic society is the Rule
              of Law. Its importance is manifested in every legal activity in
              which citizens engage, from the sale of real property to the
              prosecution of murder to international trade. As participants in a
              justice system that advances the Rule of Law, lawyers hold a
              unique and privileged position in society.
            </strong>
            Self-regulatory powers have been granted to the legal profession on
            the understanding that the profession will exercise those powers in
            the public interest. Part of that responsibility is ensuring the
            appropriate regulation of the professional conduct of lawyers.
            Members of the legal profession who draft, argue, interpret and
            challenge the law of the land can attest to the robust legal system
            in Canada. They also acknowledge the public’s reliance on the
            integrity of the people who work within the legal system and the
            authority exercised by the governing bodies of the profession. While
            lawyers are consulted for their knowledge and abilities, more is
            expected of them than forensic acumen. A special ethical
            responsibility comes with membership in the legal profession.
            <strong>
              This Code attempts to define and illustrate that responsibility in
              terms of a lawyer’s professional relationships with clients, the
              Justice system and the profession.
            </strong>
            <div className='mt-6 font-bold'>Chapter 2.1 – Integrity</div>
            <br />
            <div>
              <strong>2.1-1</strong> A lawyer has a duty to carry on the
              practice of law and discharge all responsibilities to clients,
              tribunals, the public and other members of the profession
              honourably and with integrity.
            </div>
            <div className='mt-4'>
              <strong>2.1-2</strong> A lawyer has a duty to uphold the standards
              and reputation of the legal profession and to assist in the
              advancement of its goals, organizations and institutions.
            </div>
          </>
        ),
        section: 'Nova Scotia Barristers’ Society Code of Professional Conduct',
      },
      {
        tag: 'Prince Edward Island',
        content: (
          <>
            <strong>Admission to Bar, application for</strong> <br />
            An applicant for registration as a member shall, upon receipt of the
            notification that the applicant’s application has been accepted,
            make application in the manner prescribed by the regulations to a
            judge of the Supreme Court for administration of the oaths of
            office. Administration of oaths
            <div className=' mt-6'>
              (2) The judge shall, upon receipt of a certificate from the
              secretary-treasurer stating that the applicant has complied with
              this Act and that the applicant’s application for membership has
              been accepted, administer the following oath to the applicant:
            </div>
            <div className=' mt-6'>
              I, [name] swear [or affirm] that as a barrister, solicitor and
              attorney,
              <strong>
                {''} I shall to the best of my knowledge and ability, conduct
                all matters and proceedings faithfully, honestly and with
                integrity. I shall support the Constitution and uphold and seek
                to improve the administration of justice. I shall abide by the
                ethical standards and rules governing the practice of law in
                Prince Edward Island.
              </strong>
              {''} 1992, c.39, s.17; 2022,c.80,s.9(2); 2023,c.25,s.8.
            </div>
            <hr className='my-8' />
            <div className='mt-6 font-bold'>
              s. 17(2) Legal Profession Act R.S.P.E.I. 1988, c. L-6.1
            </div>
            <div className='mt-6 font-bold'>Preface</div>
            <strong>
              One of the hallmarks of a free and democratic society is the Rule
              of Law. Its importance is manifested in every legal activity in
              which citizens engage, from the sale of real property to the
              prosecution of murder to international trade. As participants in a
              justice system that advances the Rule of Law, lawyers hold a
              unique and privileged position in society.
            </strong>
            Self-regulatory powers have been granted to the legal profession on
            the understanding that the profession will exercise those powers in
            the public interest. Part of that responsibility is ensuring the
            appropriate regulation of the professional conduct of lawyers.
            Members of the legal profession who draft, argue, interpret and
            challenge the law of the land can attest to the robust legal system
            in Canada. They also acknowledge the public’s reliance on the
            integrity of the people who work within the legal system and the
            authority exercised by the governing bodies of the profession. While
            lawyers are consulted for their knowledge and abilities, more is
            expected of them than forensic acumen. A special ethical
            responsibility comes with membership in the legal profession.
            <strong>
              This Code attempts to define and illustrate that responsibility in
              terms of a lawyer’s professional relationships with clients, the
              Justice system and the profession.
            </strong>
            <div className='mt-6 font-bold'>Chapter 2.1 – Integrity</div>
            <br />
            <div>
              <strong>2.1-1</strong> A lawyer has a duty to carry on the
              practice of law and discharge all responsibilities to clients,
              tribunals, the public and other members of the profession
              honourably and with integrity.
            </div>
            <div className='mt-4'>
              <strong>2.1-2</strong> A lawyer has a duty to uphold the standards
              and reputation of the legal profession and to assist in the
              advancement of its goals, organizations and institutions.
            </div>
          </>
        ),
        section:
          'Law Society of Prince Edward Island Code of Professional Conduct',
      },
      {
        tag: 'Newfoundland & Labrador',
        content: (
          <>
            <strong>Enrolment as solicitor</strong> <br />
            (4) Before enrolment as a solicitor, the person applying shall take
            and sign the oath or affirmation of allegiance and the following
            oath or affirmation before a judge of the Supreme Court in open
            court:
            <div className=' mt-6'>
              &quot;I do swear [affirm] that I will truly and honestly conduct
              myself in the practice of a solicitor according to the best of my
              knowledge and ability&quot; (Where an oath is taken, add &ldquo;So
              help me God&quot;)
            </div>
            <div className='mt-6 font-bold'>s. 34(4) Law Society Act</div>
            <hr className='my-8' />
            <div className='mt-6 font-bold'>Preface</div>
            <strong>
              One of the hallmarks of a free and democratic society is the Rule
              of Law. Its importance is manifested in every legal activity in
              which citizens engage, from the sale of real property to the
              prosecution of murder to international trade. As participants in a
              justice system that advances the Rule of Law, lawyers hold a
              unique and privileged position in society.
            </strong>
            Self-regulatory powers have been granted to the legal profession on
            the understanding that the profession will exercise those powers in
            the public interest. Part of that responsibility is ensuring the
            appropriate regulation of the professional conduct of lawyers.
            Members of the legal profession who draft, argue, interpret and
            challenge the law of the land can attest to the robust legal system
            in Canada. They also acknowledge the public’s reliance on the
            integrity of the people who work within the legal system and the
            authority exercised by the governing bodies of the profession. While
            lawyers are consulted for their knowledge and abilities, more is
            expected of them than forensic acumen. A special ethical
            responsibility comes with membership in the legal profession.
            <strong>
              This Code attempts to define and illustrate that responsibility in
              terms of a lawyer’s professional relationships with clients, the
              Justice system and the profession.
            </strong>
            <div className='mt-6 font-bold'>Chapter 2.1 – Integrity</div>
            <br />
            <div>
              <strong>2.1-1</strong> A lawyer has a duty to carry on the
              practice of law and discharge all responsibilities to clients,
              tribunals, the public and other members of the profession
              honourably and with integrity.
            </div>
            <div className='mt-4'>
              <strong>2.1-2</strong> A lawyer has a duty to uphold the standards
              and reputation of the legal profession and to assist in the
              advancement of its goals, organizations and institutions.
            </div>
          </>
        ),
        section: 'N&L Code of Professional Conduct',
      },
    ],
    3: [
      {
        tag: 'Yukon',
        content: (
          <>
            <strong>14 Oath or affirmation</strong> <br />
            (1) Before becoming a member, an applicant who qualifies for
            membership must take and sign the following oath or affirmation
            before a judge: I sincerely promise and [swear] [affirm] that I will
            diligently, faithfully, and to the best of my ability, execute the
            [offices of barrister and solicitor] [office of articled student]
            [other], that I will not promote suits upon frivolous pretences,
            that I will not pervert the law to favour or prejudice anyone, but
            in all things I will conduct myself truly and with integrity, and
            that
            <strong>
              I will uphold the rule of law and the rights and freedoms of all
              persons according to the laws of Canada and of this territory.
            </strong>
          </>
        ),
        section:
          's. 14(1) Legal Profession Act 2007s. 14(1) Legal Profession Act 2007',
      },
      {
        tag: 'Northwest Territories',
        content: (
          <>
            <strong>Oath or affirmation</strong> <br />
            (2) Subject to subsection (4), every person to whom a certificate is
            issued under subsection (1) shall, before engaging in the practice
            of law in the Northwest Territories, attend before a judge of the
            Supreme Court, in person or by an audio-visual method, and take and
            sign before that judge the following oath or affirmation, or an oath
            in the manner and form and with the ceremonies that the person
            declares to be binding on his or her conscience:
            <div className=' mt-6'>
              I, ................, do sincerely promise and swear (or affirm)
              that I will be faithful and bear true allegiance to His Majesty
              Charles the Third (or the reigning Sovereign for the time being);
              that I will, as a barrister and solicitor, conduct all causes and
              matters faithfully and to the best of my ability; that
            </div>
            <strong>
              I will not pervert the law to favour or prejudice any person but
              will in all things conduct myself truly and with integrity;
            </strong>
            and that I will uphold and maintain His (or Her) Majesty’s interests
            and those of my fellow citizens according to the laws in force in
            the Northwest Territories. So help me God. (omit last sentence in an
            affirmation)
            <div className='mt-6 font-bold'>
              s.21(2) Legal Profession Act  RSNWT 1988, c.L-2
            </div>
            <hr className='my-8' />
            <div className='mt-6 font-bold'>Preface</div>
            <strong>
              One of the hallmarks of a free and democratic society is the Rule
              of Law. Its importance is manifested in every legal activity in
              which citizens engage, from the sale of real property to the
              prosecution of murder to international trade. As participants in a
              justice system that advances the Rule of Law, lawyers hold a
              unique and privileged position in society.
            </strong>
            Self-regulatory powers have been granted to the legal profession on
            the understanding that the profession will exercise those powers in
            the public interest. Part of that responsibility is ensuring the
            appropriate regulation of the professional conduct of lawyers.
            Members of the legal profession who draft, argue, interpret and
            challenge the law of the land can attest to the robust legal system
            in Canada. They also acknowledge the public’s reliance on the
            integrity of the people who work within the legal system and the
            authority exercised by the governing bodies of the profession. While
            lawyers are consulted for their knowledge and abilities, more is
            expected of them than forensic acumen. A special ethical
            responsibility comes with membership in the legal profession.
            <strong>
              This Code attempts to define and illustrate that responsibility in
              terms of a lawyer’s professional relationships with clients, the
              Justice system and the profession.
            </strong>
            <div className='mt-6'>
              <strong>
                The Code sets out statements of principle followed by exemplary
                rules and commentaries, which contextualize the principles
                enunciated. The principles are important statements of the
                expected standards of ethical conduct for lawyers and inform the
                more specific guidance in the rules and commentaries.
              </strong>{' '}
              The Code assists in defining ethical practice and in identifying
              what is questionable ethically. Some sections of the Code are of
              more general application, and some sections, in addition to
              providing ethical guidance, may be read as aspirational. The Code
              in its entirety should be considered a reliable and instructive
              guide for lawyers that establishes only the minimum standards of
              professional conduct expected of members of the profession. Some
              circumstances that raise ethical considerations may be
              sufficiently unique that the guidance in a rule or commentary may
              not answer the issue or provide the required direction. In such
              cases, lawyers should consult with the Law Society, senior
              practitioners or the courts for guidance.
            </div>
            <div className='mt-6 font-bold'>Chapter 2 – Integrity</div>
            <br />
            <div>
              <strong>2.1-1</strong> A lawyer has a duty to carry on the
              practice of law and discharge all responsibilities to clients,
              tribunals, the public and other members of the profession
              honourably and with integrity.
            </div>
            <div className='mt-4'>
              <strong>2.1-2</strong> A lawyer has a duty to uphold the standards
              and reputation of the legal profession and to assist in the
              advancement of its goals, organizations and institutions.
            </div>
          </>
        ),
        section: 'NWT Code of Professional Conduct',
      },
      {
        tag: 'Nunavut',

        content: (
          <>
            <strong>Oath</strong> <br />
            (2) Subject to subsection (4), every person to whom a certificate is
            issued under subsection (1) shall, before engaging in the practice
            of law in Nunavut, take and subscribe in Nunavut before a judge of
            the Nunavut Court of Justice the following oath or an oath in the
            manner and form and with the ceremonies that the person declares to
            be binding on his or her conscience:
            <div className='mt-6'>
              I, ................, do sincerely promise and swear that I will be
              faithful and bear true allegiance to His Majesty, King Charles the
              Third (or the reigning Sovereign for the time being); that I will,
              as a barrister and solicitor (or other designation pursuant to the
              rules), conduct all causes and matters faithfully and to the best
              of my ability; that{' '}
              <strong>
                I will not pervert the law to favour or prejudice any person but
                will in all things conduct myself truly and with integrity;
              </strong>{' '}
              and that I will uphold and maintain His Majesty’s interests and
              those of my fellow citizens according to the laws in force in
              Nunavut. So help me God.
            </div>
            <div className='mt-6 font-bold'>
              s.21(2) of the Legal Profession Act of Nunavut
            </div>
            <hr className='my-8' />
            <div className='mt-6 font-bold'>Preface</div>
            <strong>
              One of the hallmarks of a free and democratic society is the Rule
              of Law. Its importance is manifested in every legal activity in
              which citizens engage, from the sale of real property to the
              prosecution of murder to international trade. As participants in a
              justice system that advances the Rule of Law, lawyers hold a
              unique and privileged position in society.
            </strong>
            Self-regulatory powers have been granted to the legal profession on
            the understanding that the profession will exercise those powers in
            the public interest. Part of that responsibility is ensuring the
            appropriate regulation of the professional conduct of lawyers.
            Members of the legal profession who draft, argue, interpret and
            challenge the law of the land can attest to the robust legal system
            in Canada. They also acknowledge the public’s reliance on the
            integrity of the people who work within the legal system and the
            authority exercised by the governing bodies of the profession. While
            lawyers are consulted for their knowledge and abilities, more is
            expected of them than forensic acumen. A special ethical
            responsibility comes with membership in the legal profession.
            <strong>
              This Code attempts to define and illustrate that responsibility in
              terms of a lawyer’s professional relationships with clients, the
              Justice system and the profession.
            </strong>
            <div className='mt-6 font-bold'>Chapter 2.1 – Integrity</div>
            <br />
            <div>
              <strong>2.1-1</strong> A lawyer has a duty to carry on the
              practice of law and discharge all responsibilities to clients,
              tribunals, the public and other members of the profession
              honourably and with integrity.
            </div>
            <div className='mt-4'>
              <strong>2.1-2</strong> A lawyer has a duty to uphold the standards
              and reputation of the legal profession and to assist in the
              advancement of its goals, organizations and institutions.
            </div>
          </>
        ),
        section: 'Law Society of Nunavut’s Code of Professional Conduct',
      },
    ],
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const currentData = pageData[currentPage]

  return (
    <div className='min-h-screen bg-white'>
      <Head>
        <title>
          By-Laws and Oaths of Law Societies | Rule of Law Project Canada
        </title>
        <meta
          name='description'
          content='Your duty to uphold the Rule of Law - Provincial By-Laws and Professional Conduct'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <div className='bg-[#F5EFE0] py-16 pt-30'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-[#2B2B39] mb-6'>
            By-Laws and Oaths of Law Societies
          </h1>
          <div className='text-[#000000] font-bold text-2xl'>
            Your duty to uphold the Rule of Law
          </div>
        </div>
      </div>

      <motion.main
        ref={contentRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='max-w-7xl mx-auto px-4 md:px-8 py-12'
      >
        <div className='space-y-14'>
          {currentData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white border border-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300'
            >
              <div className='bg-[#C1351A] text-[#FEFBF6] text-base px-8 py-1 rounded-md mb-6 inline-block font-bold'>
                {card.tag}
              </div>
              <h3 className='font-normal text-[#5F5F75] text-lg mb-4'>
                {card.title}
              </h3>
              <div className='font-normal text-[#5F5F75] text-lg leading-relaxed mb-6'>
                {card.content}
              </div>
              <button className='text-[#5F5F75] text-base font-bold hover:underline transition-colors duration-200'>
                {card.section}
              </button>
            </motion.div>
          ))}
        </div>

        <div className='flex justify-start mt-16'>
          <Pagination
            totalPages={3}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
