import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      pledge: 'Pledge',
      bylaws: 'By-Laws and Oaths of Law Societies',

      english: 'English',
      français: 'Français',
      currentLanguage: 'ENGLISH',

      callingAllLawyers: 'Calling All Canadian Lawyers!',
      reaffirmCommitment:
        'Reaffirm Your Commitment to the Rule of Law in Canada',
      ruleOfLawPledge: 'THE RULE OF LAW PLEDGE',

      protectionJudicial: 'Protection of the judicial system',
      protectionJudicialDesc:
        'We affirm our obligation to encourage respect for the administration of justice, and commit to protecting the Canadian judicial system and all of its participants from undue interference of any kind.',

      legalWorkSupporting: 'Legal work supporting the rule of law',
      legalWorkSupportingDesc:
        'We will seek to ensure access to justice for litigants where the rule of law in Canada is at stake, including through pro bono work where necessary.',

      attackOnOne: 'An attack on one is an attack on all',
      attackOnOneDesc:
        "We commit to supporting members of this Coalition of Canadian Lawyers in their work to uphold the principles in this document. If any coalition member becomes subject to undue harm or interference by any arm of any Canadian government as a result of its efforts to uphold the above principles, we all commit to supporting that member's resistance efforts.",

      takePledge: 'Take the Pledge',

      projectPresentation: 'Introducing the Rule of Law Project',

      presentationIntro:
        'Canadians have long taken pride in the fact that they live in a free and democratic society that is governed by the Rule of Law. Members of the legal profession have worked hard to ensure that individual rights are respected; that governments across Canada cannot discriminate against people for their political or other beliefs; that everyone - including government - is accountable to the law; and that no one is above the law. This system requires that legal cases be decided according to the law, by an independent and fair judiciary. However, in recent months we have seen how fragile the Rule of Law can be and how quickly it can be eroded. Could the Rule of Law be attacked and eroded in Canada? The answer is yes, it could. The Rule of Law, like democracy itself, is more than a concept or ideal. Its very existence depends on the purposeful actions of government and citizens alike. The Rule of Law and democracy both require action.',

      presentationDiscussion:
        'These questions prompted a conversation between a small group of lawyers and academics about what we Canadians can collectively do to protect, promote, and nourish the Rule of Law here in Canada. While there will be more to come, we thought we could start with this simple idea: Canadian lawyers should unite and collectively pledge to uphold the Rule of Law. This group has worked together through frank and supportive dialogue to draft a pledge for legal professionals that reads:',

      ontarioOath:
        'Lawyers across Canada take an oath when they are called to the Bar. Most provincial and territorial oaths for lawyers contain a commitment to uphold the rule of law and the administration of justice. In Ontario, lawyers swear:',

      ontarioOathText:
        'I shall not pervert the law to favour or prejudice any one, but in all things I shall conduct myself honestly and with integrity and civility. I shall seek to ensure access to justice and access to legal services. I shall seek to improve the administration of justice.',

      oathConclusion:
        "In light of these oaths, the pledge may seem redundant. We wish it were. We cannot take the Rule of Law for granted. We must be vigilant in our role as guardians of a free and democratic society. Through this pledge, we reaffirm the commitments we made in our oaths. We also commit to protecting the independence of our judicial system and will support any pledge member's resistance efforts if they become subject to undue harm or interference by any arm of any Canadian government. Instead of being redundant, taking the pledge is a simple, yet necessary reminder and confirmation of our commitment to our roles as lawyers. We support the foundations of our Canadian democracy.",

      callToAction:
        'We are calling all Canadian lawyers to join us and sign this pledge. Together we can protect the institutions that protect us.',

      signedBy: 'Signed by',
      loadingPledges: 'Loading Pledges...',
      noPledgesYet: 'No pledges yet. Be the first to take the pledge!',
      anonymous: 'Anonymous',
      prev: 'Prev',
      next: 'Next',

      ruleOfLawBedrock:
        "The Rule of Law is the bedrock on which Canada's constitutional democracy stands. It holds all people accountable to the law, and protects the rights and freedoms that all Canadians are entitled to enjoy in this free and democratic society.",

      attackOnDemocracy:
        'An attack on the Rule of Law is an attack on our democracy.',

      canada: 'Canada',
      pledges: 'Pledges',

      background: 'Background',
      ruleOfLawProjectStarted:
        'The Rule of Law Project was started by a group of concerned lawyers, who want to educate the public about the important role the rule of law plays in our democracy, and to encourage lawyers and others to stand up for the rule of law so that it does not get eroded over time.',

      copyright: '© 2025 Rule of Law Project Canada',

      externalLinks: 'External Links',
      canadianBarStatement: 'Canadian Bar Association Statement',
      federationStatement: 'Federation of Law Societies of Canada Statement',
      chiefJusticesStatement: 'Statement of the Chief Justices of Ontario',
      intlLawStatement: 'International Law Association Canada Statement',

      contactInfo: 'You can reach us and share your comments at',

      weAreCanadianLawyers:
        'We are Canadian lawyers. Consistent with our oath, we are guardians, protectors and a voice for the Rule of Law in Canada. Today, we stand together in solidarity to re-affirm our duty to vigorously and unwaveringly defend the Rule of Law in Canada, and commit to the following principles:',
      pledgeToReaffirm:
        'Pledge to reaffirm your commitment for the rule of law in Canada',
      takePledgeExclamation: 'Take the Pledge!',
      democracyStands:
        'Our democracy stands on the bedrock of the Rule of Law. The Rule of Law - like democracy - must be exercised and protected. History has shown how quickly a democracy can be eroded when good people do nothing, when laws and judges are not obeyed, and when the legal bar is silenced or simply stays silent. Today, we are asking you not to stay silent, to take the pledge and renew your oath to protect the Rule of Law in Canada.',

      whatIsRuleOfLaw: 'What is the Rule of Law and why does it matter?',
      ruleOfLawExplanation1:
        'Simply stated, it is a guiding principle used and followed in democratic societies to ensure that: (1) the people get to elect their government, and get to do so in fair and open elections, (2) although the elected government is responsible for making laws, the law applies to everyone equally, including to the government, (3) laws are made known to everyone so that they can be followed, (4) government and citizens are held accountable to the rule of law through cases brought to court, and decided by an independent judiciary. Judges must be independent to ensure they interpret the law according to legal principles, and not according to personal bias, political affiliation or under undue pressure or coercion.',
      ruleOfLawExplanation2:
        'In short, the rule of law guards against arbitrary exercise of government power, and ensures equal access to and protection under the law (protections like the right to due process/a fair hearing). So, while governments can pass laws, they still have to conform to basic legal principles that have been developed to ensure fairness. In addition to those principles, in Canada we also have a Constitution (which includes the Canadian Charter of Rights and Freedoms). The Constitution is the supreme law with which all laws must conform. The Charter guarantees certain rights and freedoms to all Canadians, such as the freedom of religion and speech, or the right to life, liberty and security of the person. If a law is found to be unconstitutional, then it might be struck down as unenforceable.',
      ruleOfLawProjectDescription:
        'The Rule of Law Project Canada is dedicated to creating a community of lawyers that will work together to support the rule of law. We welcome lawyers from all areas of practice. We will strive to educate all Canadians on the importance of the rule of law.',
      ruleOfLawProjectCanada: 'Rule of Law Project Canada',
      footerDescription:
        "The Rule of Law project Canada is the bedrock on which Canada's constitutional democracy stands. It holds all people accountable to the law, and protects the rights and freedoms that all Canadians are entitled to enjoy in this free and democratic society.",

      fillOutForm: 'Fill out this form to take the Rule of Law Pledge',
      pledgeCountedPublic:
        'Your pledge will be counted and will be made public.',
      takePledgeTitle: 'Take the Pledge | Rule of Law Canada',
      pledgeSupport: 'Pledge your support for the Rule of Law in Canada',

      yourName: 'Your name',
      designationOrganization: 'Designation/Organization',
      yourEmail: 'Your email',
      province: 'Province',
      receiveUpdatesText:
        'Yes, I want to receive updates on the Rule of Law Project, Canada.',
      takePledgeButton: 'I take this Pledge',
      submitting: 'Submitting...',
      thankYouPledge: 'Thank you for your pledge!',

      emailRequired: 'Email is required',
      emailInvalidDomainPeriod:
        'Invalid email format: domain cannot start with a period',
      emailInvalidConsecutivePeriods:
        'Invalid email format: domain cannot contain consecutive periods',
      emailInvalidNoAt: 'Invalid email format: @ symbol is required',
      emailInvalidNoDomain:
        'Invalid email format: domain extension is required (e.g., .com, .org)',
      emailInvalidDomainCharacters:
        'Invalid email format: domain contains invalid characters',
      emailInvalidFormat: 'Please enter a valid email (e.g., name@example.com)',

      justiceChampion: 'Justice Champion!',
      thankYouModalDescription:
        'Thank you for reaffirming your commitment to the Rule of Law in Canada. Would you like to share this pledge with other lawyers?',
      shareMessage:
        "I've joined {{count}} champions upholding the Rule of Law in Canada. Join us!",
      youHaveJoined: 'You have joined a movement of',
      championsUpholding: 'champions upholding the Rule of Law',
      shareYourPledge: 'Share your pledge:',
      shareOnWhatsApp: 'Share on WhatsApp',
      shareOnTwitter: 'Share on Twitter/X',
      shareOnTelegram: 'Share on Telegram',
      shareOnLinkedIn: 'Share on LinkedIn',
      shareViaEmail: 'Share via Email',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      continueYourJourney: 'Continue Your Journey',
      emailSubject: 'Rule of Law Pledge',

      byLawsPageTitle:
        'By-Laws and Oaths of Law Societies | Rule of Law Project Canada',
      byLawsPageDescription:
        'Your duty to uphold the Rule of Law - Provincial By-Laws and Professional Conduct',
      dutyToUphold: 'Your duty to uphold the Rule of Law',
      byLawsCount: 'of 12 By-Laws',

      ontario: 'Ontario',
      alberta: 'Alberta',
      britishColumbia: 'British Columbia',
      saskatchewan: 'Saskatchewan',
      quebec: 'Quebec',
      novaScotia: 'Nova Scotia',
      princeEdwardIsland: 'Prince Edward Island',
      newfoundlandLabrador: 'Newfoundland & Labrador',
      yukon: 'Yukon',
      northwestTerritories: 'Northwest Territories',
      nunavut: 'Nunavut',

      ontarioOathTitle:
        '21. (1) The required oath for an applicant for the issuance of a licence to practise law in Ontario as a barrister and solicitor is as follows:',
      ontarioOathContent:
        "I … accept the honour and privilege, duty and responsibility of practising law as a barrister and solicitor in the Province of Ontario. I shall protect and defend the rights and interests of such persons as may employ me. I shall conduct all cases faithfully and to the best of my ability. I shall neglect no one's interest and shall faithfully serve and diligently represent the best interests of my client. I shall not refuse causes of complaint reasonably founded, nor shall I promote suits upon frivolous pretences. I shall not pervert the law to favour or prejudice any one, but in all things I shall conduct myself honestly and with integrity and civility. I shall seek to ensure access to justice and access to legal services. I shall seek to improve the administration of justice. I shall champion the rule of law and safeguard the rights and freedoms of all persons. I shall strictly observe and uphold the ethical standards that govern my profession. All this I do swear or affirm to observe and perform to the best of my knowledge and ability.",
      ontarioSection: 's. 21(1) of By Law 4',

      albertaOathIntro:
        'Rule 65.2(8) of the Rules of the Law Society of Alberta sets out the oath:',
      albertaOathContent:
        "I will as a Barrister and Solicitor conduct all causes and matters faithfully and to the best of my ability. I will not seek to destroy anyone's property. I will not promote suits upon frivolous pretences. I will not pervert the law to favour or prejudice anyone, but in all things will conduct myself truly and with integrity. I will uphold and maintain the Sovereign's interest and that of the public according to the law in force in Alberta.",

      bcOathContent:
        'BARRISTERS AND SOLICITORS OATH: Do you sincerely promise and swear (or affirm) that you will diligently, faithfully and to the best of your ability execute the offices of Barrister and Solicitor; that you will not promote suits upon frivolous pretences; that you will not pervert the law to favour or prejudice anyone; but in all things conduct yourself truly and with integrity; and that you will uphold the rule of law and the rights and freedoms of all persons according to the laws of Canada and of the Province of British Columbia, including the Constitution, which recognizes and affirms the Aboriginal and treaty rights of First Nations, Inuit and Métis peoples.',
      bcSection:
        "Oath per s. 2-84(2)(a) of the Law Society of British Columbia's rules",

      saskPreface: 'PREFACE',
      saskRuleOfLaw:
        'The Rule of Law is a cornerstone of the Constitution and Canadian society. Lawyers are essential participants in a justice system that advances the Rule of Law.',
      saskRuleOfLawContinued:
        ' They represent the interests of their clients, are members of a profession and are officers of the Court. They enjoy a unique and privileged position in society.',
      saskProfessionalResponsibility:
        'Lawyers have a professional and ethical responsibility to serve their clients, the profession and the judicial system in terms that protect and promote their clients and the public interest.',
      saskCodeDescription:
        'This Code should not be construed as all-encompassing or as limiting other duties imperative to the protection of the public, and the public interest generally. Instead, this Code is intended to articulate those immutable ethical principles that assure a philosophy where the legal profession is dedicated to the high standards of ethical behaviour that are required, and must evolve over time in a changing society.',
      saskCodeTitle: 'Law Society of Saskatchewan Code of Professional Conduct',
      saskOathIntro:
        'I DO SOLEMNLY SWEAR: (or affirm) THAT in accepting the honour, privilege and duty of practising law in the Province of Saskatchewan,',
      saskOathContent:
        'I will diligently, faithfully and to the best of my ability discharge the duties of my office and support the Rule of Law.',
      saskOathConclusion:
        'I will seek to improve the administration of justice and uphold and maintain the interests of my fellow citizens according to the laws in force in the Province of Saskatchewan. I will conduct myself honestly and with integrity and civility, and will strictly observe and uphold the ethical standards that govern my profession. SO HELP ME GOD. (delete if affirmed)',
      saskSection:
        'Form A-14 read with r. 715 of the Law Society of Saskatchewan Rules',

      quebecPreamble: 'Preamble',
      quebecPreambleContent:
        'WHEREAS a lawyer is a servant of justice; <br />WHEREAS the practice of the profession of lawyer is based on the following values and principles which a lawyer must take into consideration in all circumstances: <br />(1) compliance with legal provisions and preservation of the rule of law; <br />(2) access to justice;',
      quebecPreliminary:
        'PRELIMINARY PROVISIONS <br />1. This code sets out general and specific duties a lawyer owes to the public, to clients, to the administration of justice and to the profession. <br />O.C. 129-2015, s. 1.',
      quebecApplication:
        '2. This code applies to every lawyer, regardless of the manner in which he engages in his professional activities. This code also applies, with the necessary modifications, to every lawyer acting in respect of a recourse or dispute that concerns him personally. <br />It applies in addition to any other rule of professional conduct related to the exercise, by the lawyer, of any other activity, in particular, a job, a function, an office or the operation of an enterprise.',
      quebecRuleOfLaw:
        '12. A lawyer must support respect for the rule of law. However, he may, for good reason and by legitimate means, criticize a legal provision, contest the interpretation or application thereof, or seek to have it repealed, amended or replaced.',
      quebecSection: 'Code of Professional Conduct of Lawyers',

      nsOathTitle: 'Oath or affirmation on Admission',
      nsOathIntro:
        '3.9.5 Every person being called to the Bar shall swear or affirm the following Oath or Affirmation on Admission to the Bar:',
      nsOathContent:
        '"I, [name], swear/affirm that as a lawyer, I shall, to the best of my knowledge and ability, conduct all matters and proceedings faithfully, honestly and with integrity. I shall support the Rule of Law and uphold and seek to improve the administration of justice. I shall abide by the ethical standards and rules governing the practice of law in Nova Scotia."',
      nsRegulations: "Nova Scotia Barristers' Society Regulations, r. 3.9.5",
      nsPreface: 'Preface',
      nsRuleOfLawImportance:
        'One of the hallmarks of a free and democratic society is the Rule of Law. Its importance is manifested in every legal activity in which citizens engage, from the sale of real property to the prosecution of murder to international trade. As participants in a justice system that advances the Rule of Law, lawyers hold a unique and privileged position in society.',
      nsRegulationContent:
        "Self-regulatory powers have been granted to the legal profession on the understanding that the profession will exercise those powers in the public interest. Part of that responsibility is ensuring the appropriate regulation of the professional conduct of lawyers. Members of the legal profession who draft, argue, interpret and challenge the law of the land can attest to the robust legal system in Canada. They also acknowledge the public's reliance on the integrity of the people who work within the legal system and the authority exercised by the governing bodies of the profession. While lawyers are consulted for their knowledge and abilities, more is expected of them than forensic acumen. A special ethical responsibility comes with membership in the legal profession.",
      nsCodeResponsibility:
        "This Code attempts to define and illustrate that responsibility in terms of a lawyer's professional relationships with clients, the Justice system and the profession.",
      nsIntegrityChapter: 'Chapter 2.1 – Integrity',
      nsIntegrityDuty:
        'A lawyer has a duty to carry on the practice of law and discharge all responsibilities to clients, tribunals, the public and other members of the profession honourably and with integrity.',
      nsStandardsDuty:
        'A lawyer has a duty to uphold the standards and reputation of the legal profession and to assist in the advancement of its goals, organizations and institutions.',
      nsSection: "Nova Scotia Barristers' Society Code of Professional Conduct",

      peiAdmissionTitle: 'Admission to Bar, application for',
      peiAdmissionContent:
        "An applicant for registration as a member shall, upon receipt of the notification that the applicant's application has been accepted, make application in the manner prescribed by the regulations to a judge of the Supreme Court for administration of the oaths of office. Administration of oaths",
      peiJudgeContent:
        "(2) The judge shall, upon receipt of a certificate from the secretary-treasurer stating that the applicant has complied with this Act and that the applicant's application for membership has been accepted, administer the following oath to the applicant:",
      peiOathContent:
        'I, [name] swear [or affirm] that as a barrister, solicitor and attorney, I shall to the best of my knowledge and ability, conduct all matters and proceedings faithfully, honestly and with integrity. I shall support the Constitution and uphold and seek to improve the administration of justice. I shall abide by the ethical standards and rules governing the practice of law in Prince Edward Island. 1992, c.39, s.17; 2022,c.80,s.9(2); 2023,c.25,s.8.',
      peiLegalAct: 's. 17(2) Legal Profession Act R.S.P.E.I. 1988, c. L-6.1',
      peiPreface: 'Preface',
      peiRuleOfLawImportance:
        'One of the hallmarks of a free and democratic society is the Rule of Law. Its importance is manifested in every legal activity in which citizens engage, from the sale of real property to the prosecution of murder to international trade. As participants in a justice system that advances the Rule of Law, lawyers hold a unique and privileged position in society.',
      peiRegulationContent:
        "Self-regulatory powers have been granted to the legal profession on the understanding that the profession will exercise those powers in the public interest. Part of that responsibility is ensuring the appropriate regulation of the professional conduct of lawyers. Members of the legal profession who draft, argue, interpret and challenge the law of the land can attest to the robust legal system in Canada. They also acknowledge the public's reliance on the integrity of the people who work within the legal system and the authority exercised by the governing bodies of the profession. While lawyers are consulted for their knowledge and abilities, more is expected of them than forensic acumen. A special ethical responsibility comes with membership in the legal profession.",
      peiCodeResponsibility:
        "This Code attempts to define and illustrate that responsibility in terms of a lawyer's professional relationships with clients, the Justice system and the profession.",
      peiIntegrityChapter: 'Chapter 2.1 – Integrity',
      peiIntegrityDuty:
        'A lawyer has a duty to carry on the practice of law and discharge all responsibilities to clients, tribunals, the public and other members of the profession honourably and with integrity.',
      peiStandardsDuty:
        'A lawyer has a duty to uphold the standards and reputation of the legal profession and to assist in the advancement of its goals, organizations and institutions.',
      peiSection:
        'Law Society of Prince Edward Island Code of Professional Conduct',

      nlSolicitorTitle: 'Enrolment as solicitor',
      nlSolicitorContent:
        '(4) Before enrolment as a solicitor, the person applying shall take and sign the oath or affirmation of allegiance and the following oath or affirmation before a judge of the Supreme Court in open court:',
      nlOathContent:
        '"I do swear [affirm] that I will truly and honestly conduct myself in the practice of a solicitor according to the best of my knowledge and ability" (Where an oath is taken, add "So help me God")',
      nlLawSocietyAct: 's. 34(4) Law Society Act',
      nlPreface: 'Preface',
      nlRuleOfLawImportance:
        'One of the hallmarks of a free and democratic society is the Rule of Law. Its importance is manifested in every legal activity in which citizens engage, from the sale of real property to the prosecution of murder to international trade. As participants in a justice system that advances the Rule of Law, lawyers hold a unique and privileged position in society.',
      nlRegulationContent:
        "Self-regulatory powers have been granted to the legal profession on the understanding that the profession will exercise those powers in the public interest. Part of that responsibility is ensuring the appropriate regulation of the professional conduct of lawyers. Members of the legal profession who draft, argue, interpret and challenge the law of the land can attest to the robust legal system in Canada. They also acknowledge the public's reliance on the integrity of the people who work within the legal system and the authority exercised by the governing bodies of the profession. While lawyers are consulted for their knowledge and abilities, more is expected of them than forensic acumen. A special ethical responsibility comes with membership in the legal profession.",
      nlCodeResponsibility:
        "This Code attempts to define and illustrate that responsibility in terms of a lawyer's professional relationships with clients, the Justice system and the profession.",
      nlIntegrityChapter: 'Chapter 2.1 – Integrity',
      nlIntegrityDuty:
        'A lawyer has a duty to carry on the practice of law and discharge all responsibilities to clients, tribunals, the public and other members of the profession honourably and with integrity.',
      nlStandardsDuty:
        'A lawyer has a duty to uphold the standards and reputation of the legal profession and to assist in the advancement of its goals, organizations and institutions.',
      nlSection: 'N&L Code of Professional Conduct',

      yukonOathTitle: '14 Oath or affirmation',
      yukonOathContent:
        '(1) Before becoming a member, an applicant who qualifies for membership must take and sign the following oath or affirmation before a judge: I sincerely promise and [swear] [affirm] that I will diligently, faithfully, and to the best of my ability, execute the [offices of barrister and solicitor] [office of articled student] [other], that I will not promote suits upon frivolous pretences, that I will not pervert the law to favour or prejudice anyone, but in all things I will conduct myself truly and with integrity, and that',
      yukonRuleOfLawContent:
        'I will uphold the rule of law and the rights and freedoms of all persons according to the laws of Canada and of this territory.',
      yukonSection: 's. 14(1) Legal Profession Act 2007',

      nwtOathTitle: 'Oath or affirmation',
      nwtOathIntro:
        '(2) Subject to subsection (4), every person to whom a certificate is issued under subsection (1) shall, before engaging in the practice of law in the Northwest Territories, attend before a judge of the Supreme Court, in person or by an audio-visual method, and take and sign before that judge the following oath or affirmation, or an oath in the manner and form and with the ceremonies that the person declares to be binding on his or her conscience:',
      nwtOathContent:
        'I, ................, do sincerely promise and swear (or affirm) that I will be faithful and bear true allegiance to His Majesty Charles the Third (or the reigning Sovereign for the time being); that I will, as a barrister and solicitor, conduct all causes and matters faithfully and to the best of my ability; that',
      nwtIntegrityContent:
        'I will not pervert the law to favour or prejudice any person but will in all things conduct myself truly and with integrity;',
      nwtOathConclusion:
        "and that I will uphold and maintain His (or Her) Majesty's interests and those of my fellow citizens according to the laws in force in the Northwest Territories. So help me God. (omit last sentence in an affirmation)",
      nwtLegalAct: 's.21(2) Legal Profession Act RSNWT 1988, c.L-2',
      nwtPreface: 'Preface',
      nwtRuleOfLawImportance:
        'One of the hallmarks of a free and democratic society is the Rule of Law. Its importance is manifested in every legal activity in which citizens engage, from the sale of real property to the prosecution of murder to international trade. As participants in a justice system that advances the Rule of Law, lawyers hold a unique and privileged position in society.',
      nwtRegulationContent:
        "Self-regulatory powers have been granted to the legal profession on the understanding that the profession will exercise those powers in the public interest. Part of that responsibility is ensuring the appropriate regulation of the professional conduct of lawyers. Members of the legal profession who draft, argue, interpret and challenge the law of the land can attest to the robust legal system in Canada. They also acknowledge the public's reliance on the integrity of the people who work within the legal system and the authority exercised by the governing bodies of the profession. While lawyers are consulted for their knowledge and abilities, more is expected of them than forensic acumen. A special ethical responsibility comes with membership in the legal profession.",
      nwtCodeResponsibility:
        "This Code attempts to define and illustrate that responsibility in terms of a lawyer's professional relationships with clients, the Justice system and the profession.",
      nwtCodeGuidance:
        'The Code sets out statements of principle followed by exemplary rules and commentaries, which contextualize the principles enunciated. The principles are important statements of the expected standards of ethical conduct for lawyers and inform the more specific guidance in the rules and commentaries.',
      nwtCodeDescription:
        'The Code assists in defining ethical practice and in identifying what is questionable ethically. Some sections of the Code are of more general application, and some sections, in addition to providing ethical guidance, may be read as aspirational. The Code in its entirety should be considered a reliable and instructive guide for lawyers that establishes only the minimum standards of professional conduct expected of members of the profession. Some circumstances that raise ethical considerations may be sufficiently unique that the guidance in a rule or commentary may not answer the issue or provide the required direction. In such cases, lawyers should consult with the Law Society, senior practitioners or the courts for guidance.',
      nwtIntegrityChapter: 'Chapter 2 – Integrity',
      nwtIntegrityDuty:
        'A lawyer has a duty to carry on the practice of law and discharge all responsibilities to clients, tribunals, the public and other members of the profession honourably and with integrity.',
      nwtStandardsDuty:
        'A lawyer has a duty to uphold the standards and reputation of the legal profession and to assist in the advancement of its goals, organizations and institutions.',
      nwtSection: 'NWT Code of Professional Conduct',

      nunavutOathTitle: 'Oath',
      nunavutOathIntro:
        '(2) Subject to subsection (4), every person to whom a certificate is issued under subsection (1) shall, before engaging in the practice of law in Nunavut, take and subscribe in Nunavut before a judge of the Nunavut Court of Justice the following oath or an oath in the manner and form and with the ceremonies that the person declares to be binding on his or her conscience:',
      nunavutOathContent:
        'I, ................, do sincerely promise and swear that I will be faithful and bear true allegiance to His Majesty, King Charles the Third (or the reigning Sovereign for the time being); that I will, as a barrister and solicitor (or other designation pursuant to the rules), conduct all causes and matters faithfully and to the best of my ability; that',
      nunavutIntegrityContent:
        'I will not pervert the law to favour or prejudice any person but will in all things conduct myself truly and with integrity;',
      nunavutOathConclusion:
        "and that I will uphold and maintain His Majesty's interests and those of my fellow citizens according to the laws in force in Nunavut. So help me God.",
      nunavutLegalAct: 's.21(2) of the Legal Profession Act of Nunavut',
      nunavutPreface: 'Preface',
      nunavutRuleOfLawImportance:
        'One of the hallmarks of a free and democratic society is the Rule of Law. Its importance is manifested in every legal activity in which citizens engage, from the sale of real property to the prosecution of murder to international trade. As participants in a justice system that advances the Rule of Law, lawyers hold a unique and privileged position in society.',
      nunavutRegulationContent:
        "Self-regulatory powers have been granted to the legal profession on the understanding that the profession will exercise those powers in the public interest. Part of that responsibility is ensuring the appropriate regulation of the professional conduct of lawyers. Members of the legal profession who draft, argue, interpret and challenge the law of the land can attest to the robust legal system in Canada. They also acknowledge the public's reliance on the integrity of the people who work within the legal system and the authority exercised by the governing bodies of the profession. While lawyers are consulted for their knowledge and abilities, more is expected of them than forensic acumen. A special ethical responsibility comes with membership in the legal profession.",
      nunavutCodeResponsibility:
        "This Code attempts to define and illustrate that responsibility in terms of a lawyer's professional relationships with clients, the Justice system and the profession.",
      nunavutIntegrityChapter: 'Chapter 2.1 – Integrity',
      nunavutIntegrityDuty:
        'A lawyer has a duty to carry on the practice of law and discharge all responsibilities to clients, tribunals, the public and other members of the profession honourably and with integrity.',
      nunavutStandardsDuty:
        'A lawyer has a duty to uphold the standards and reputation of the legal profession and to assist in the advancement of its goals, organizations and institutions.',
      nunavutSection: "Law Society of Nunavut's Code of Professional Conduct",
    },
  },
  fr: {
    translation: {
      home: 'Maison',
      about: 'À propos',
      pledge: 'Gage',
      bylaws: 'Règlements et serments des barreaux',

      english: 'English',
      français: 'Français',
      currentLanguage: 'FRANÇAIS',

      callingAllLawyers: 'Appel à tous les avocats canadiens !',
      reaffirmCommitment:
        "Réaffirmez votre engagement envers l'État de droit au Canada",
      ruleOfLawPledge: "L'ENGAGEMENT POUR L'ÉTAT DE DROIT",

      protectionJudicial: 'Protection du système judiciaire',
      protectionJudicialDesc:
        "Nous affirmons notre obligation d'encourager le respect de l'administration de la justice et nous nous engageons à protéger le système judiciaire canadien et tous ses participants contre toute ingérence indue de quelque nature que ce soit.",

      legalWorkSupporting: "Travail juridique en faveur de l'État de droit",
      legalWorkSupportingDesc:
        "Nous chercherons à garantir l'accès à la justice pour les plaideurs lorsque la primauté du droit au Canada est en jeu, notamment par le biais de travaux bénévoles lorsque cela est nécessaire.",

      attackOnOne: "Une attaque contre l'un est une attaque contre tous",
      attackOnOneDesc:
        "Nous nous engageons à soutenir les membres de la Coalition des avocats canadiens dans leurs efforts pour faire respecter les principes énoncés dans ce document. Si un membre de la Coalition subit un préjudice indu ou une ingérence de la part d'un organisme gouvernemental canadien en raison de ses efforts pour faire respecter les principes susmentionnés, nous nous engageons tous à soutenir ses efforts de résistance.",

      takePledge: "Prenez l'engagement",

      projectPresentation: 'Présentation du projet État de droit',

      presentationIntro:
        "Les Canadiens sont fiers depuis longtemps de vivre dans une société libre et démocratique, régie par la primauté du droit. Les membres de la profession juridique ont travaillé fort pour garantir le respect des droits individuels; l'interdiction pour les gouvernements du Canada de discriminer les personnes en raison de leurs convictions politiques ou autres; l'obligation pour chacun, y compris le gouvernement, de rendre des comptes devant la loi; et l'absence de toute autorité au-dessus des lois. Ce système exige que les affaires judiciaires soient tranchées conformément à la loi, par un pouvoir judiciaire indépendant et équitable. Cependant, ces derniers mois, nous avons constaté la fragilité de la primauté du droit et sa rapidité d'érosion. La primauté du droit pourrait-elle être attaquée et érodée au Canada? La réponse est oui. La primauté du droit, comme la démocratie elle-même, est plus qu'un concept ou un idéal. Son existence même dépend des actions déterminées du gouvernement et des citoyens. La primauté du droit et la démocratie exigent toutes deux des actions concrètes.",

      presentationDiscussion:
        "Ces questions ont suscité une discussion entre un petit groupe d'avocats et d'universitaires sur ce que nous, Canadiens, pouvons faire collectivement pour protéger, promouvoir et nourrir la primauté du droit au Canada. Bien que d'autres initiatives soient à venir, nous avons pensé commencer par cette idée simple : les avocats canadiens devraient s'unir et s'engager collectivement à défendre la primauté du droit. Ce groupe a collaboré, dans le cadre d'un dialogue franc et constructif, à la rédaction d'un engagement pour les professionnels du droit qui se lit comme suit :",

      ontarioOath:
        "Partout au Canada, les avocats prêtent serment lorsqu'ils sont admis au Barreau. La plupart des serments provinciaux et territoriaux des avocats comportent un engagement à respecter la primauté du droit et l'administration de la justice. En Ontario, les avocats prêtent serment :",

      ontarioOathText:
        "Je ne détournerai pas la loi pour favoriser ou porter préjudice à qui que ce soit, mais je me conduirai en toutes circonstances avec honnêteté, intégrité et civilité. Je m'efforcerai de garantir l'accès à la justice et aux services juridiques. Je m'efforcerai d'améliorer l'administration de la justice.",

      oathConclusion:
        "À la lumière de ces serments, ce serment peut paraître superflu. Nous souhaiterions qu'il le soit. Nous ne pouvons tenir la primauté du droit pour acquise. Nous devons être vigilants dans notre rôle de gardiens d'une société libre et démocratique. Par ce serment, nous réaffirmons les engagements que nous avons pris dans nos serments. Nous nous engageons également à protéger l'indépendance de notre système judiciaire et à soutenir les efforts de résistance de tout membre du serment s'il est victime de préjudice ou d'ingérence injustifiés de la part de tout organe du gouvernement canadien. Loin d'être superflu, ce serment est un rappel simple, mais nécessaire, et une confirmation de notre engagement envers notre rôle d'avocats. Nous soutenons les fondements de notre démocratie canadienne.",

      callToAction:
        'Nous appelons tous les avocats canadiens à se joindre à nous et à signer cet engagement. Ensemble, nous pouvons protéger les institutions qui nous protègent.',

      signedBy: 'Signé par',
      loadingPledges: 'Chargement des engagements...',
      noPledgesYet:
        "Aucun engagement pour l'instant. Soyez le premier à prendre l'engagement !",
      anonymous: 'Anonyme',
      prev: 'Précédent',
      next: 'Suivant',

      ruleOfLawBedrock:
        "L'État de droit est le fondement de la démocratie constitutionnelle canadienne. Il oblige chacun à respecter la loi et protège les droits et libertés dont tous les Canadiens ont droit dans cette société libre et démocratique.",

      attackOnDemocracy:
        "Une attaque contre l'État de droit est une attaque contre notre démocratie.",

      canada: 'Canada',
      pledges: 'Engagements',

      background: 'Contexte',
      ruleOfLawProjectStarted:
        "Le Projet État de droit a été lancé par un groupe d'avocats préoccupés, qui veulent éduquer le public sur le rôle important que joue l'état de droit dans notre démocratie, et encourager les avocats et autres à défendre l'état de droit pour qu'il ne soit pas érodé au fil du temps.",

      copyright: '© 2025 Projet État de droit Canada',

      externalLinks: 'Liens externes',
      canadianBarStatement: "Déclaration de l'Association du Barreau canadien",
      federationStatement:
        'Déclaration de la Fédération des ordres professionnels de juristes du Canada',
      chiefJusticesStatement: "Déclaration des juges en chef de l'Ontario",
      intlLawStatement:
        "Déclaration de l'Association canadienne de droit international",

      contactInfo: 'Vous pouvez nous contacter et partager vos commentaires à',

      weAreCanadianLawyers:
        "Nous sommes des avocats canadiens. Conformément à notre serment, nous sommes les gardiens, les protecteurs et la voix de la primauté du droit au Canada. Aujourd'hui, nous nous tenons ensemble en solidarité pour réaffirmer notre devoir de défendre vigoureusement et inébranlablement la primauté du droit au Canada, et nous nous engageons aux principes suivants :",
      pledgeToReaffirm:
        'Engagez-vous à réaffirmer votre engagement envers la primauté du droit au Canada',
      takePledgeExclamation: "Prenez l'engagement !",
      democracyStands:
        "Notre démocratie repose sur le fondement de la primauté du droit. La primauté du droit - comme la démocratie - doit être exercée et protégée. L'histoire a montré à quelle vitesse une démocratie peut s'éroder quand les bonnes personnes ne font rien, quand les lois et les juges ne sont pas obéis, et quand le barreau est réduit au silence ou reste simplement silencieux. Aujourd'hui, nous vous demandons de ne pas rester silencieux, de prendre l'engagement et de renouveler votre serment de protéger la primauté du droit au Canada.",

      whatIsRuleOfLaw:
        "Qu'est-ce que la primauté du droit et pourquoi est-ce important ?",
      ruleOfLawExplanation1:
        "En termes simples, c'est un principe directeur utilisé et suivi dans les sociétés démocratiques pour garantir que : (1) le peuple peut élire son gouvernement, et le faire lors d'élections justes et ouvertes, (2) bien que le gouvernement élu soit responsable de l'élaboration des lois, la loi s'applique à tous également, y compris au gouvernement, (3) les lois sont rendues publiques afin que chacun puisse les suivre, (4) le gouvernement et les citoyens sont tenus responsables devant la primauté du droit par des affaires portées devant les tribunaux et décidées par un pouvoir judiciaire indépendant. Les juges doivent être indépendants pour s'assurer qu'ils interprètent la loi selon des principes juridiques, et non selon des préjugés personnels, une affiliation politique ou sous une pression ou coercition indue.",
      ruleOfLawExplanation2:
        "En bref, la primauté du droit protège contre l'exercice arbitraire du pouvoir gouvernemental et garantit un accès égal et une protection égale devant la loi (des protections comme le droit à une procédure équitable/à une audience équitable). Ainsi, bien que les gouvernements puissent adopter des lois, ils doivent encore se conformer aux principes juridiques de base qui ont été développés pour garantir l'équité. En plus de ces principes, au Canada, nous avons aussi une Constitution (qui inclut la Charte canadienne des droits et libertés). La Constitution est la loi suprême à laquelle toutes les lois doivent se conformer. La Charte garantit certains droits et libertés à tous les Canadiens, tels que la liberté de religion et d'expression, ou le droit à la vie, à la liberté et à la sécurité de la personne. Si une loi est jugée inconstitutionnelle, elle pourrait être annulée comme inapplicable.",
      ruleOfLawProjectDescription:
        "Le Projet État de droit Canada se consacre à créer une communauté d'avocats qui travailleront ensemble pour soutenir la primauté du droit. Nous accueillons les avocats de tous les domaines de pratique. Nous nous efforcerons d'éduquer tous les Canadiens sur l'importance de la primauté du droit.",
      ruleOfLawProjectCanada: 'Projet État de droit Canada',
      footerDescription:
        'Le projet État de droit Canada est le fondement sur lequel repose la démocratie constitutionnelle du Canada. Il tient toutes les personnes responsables devant la loi et protège les droits et libertés que tous les Canadiens ont le droit de jouir dans cette société libre et démocratique.',

      fillOutForm:
        "Remplissez ce formulaire pour prendre l'Engagement pour l'État de droit",
      pledgeCountedPublic: 'Votre engagement sera compté et rendu public.',
      takePledgeTitle: "Prenez l'Engagement | Projet État de droit Canada",
      pledgeSupport: "Engagez-vous à soutenir l'État de droit au Canada",

      yourName: 'Votre nom',
      designationOrganization: 'Désignation/Organisation',
      yourEmail: 'Votre courriel',
      province: 'Province',
      receiveUpdatesText:
        'Oui, je souhaite recevoir des mises à jour sur le Projet État de droit, Canada.',
      takePledgeButton: 'Je prends cet engagement',
      submitting: 'Soumission en cours...',
      thankYouPledge: 'Merci pour votre engagement !',

      emailRequired: 'Le courriel est requis',
      emailInvalidDomainPeriod:
        'Format de courriel invalide : le domaine ne peut pas commencer par un point',
      emailInvalidConsecutivePeriods:
        'Format de courriel invalide : le domaine ne peut pas contenir des points consécutifs',
      emailInvalidNoAt: 'Format de courriel invalide : le symbole @ est requis',
      emailInvalidNoDomain:
        "Format de courriel invalide : l'extension de domaine est requise (ex : .com, .org)",
      emailInvalidDomainCharacters:
        'Format de courriel invalide : le domaine contient des caractères invalides',

      justiceChampion: 'Champion de la Justice !',
      thankYouModalDescription:
        "Merci d'avoir réaffirmé votre engagement envers l'État de droit au Canada. Souhaitez-vous partager cet engagement avec d'autres avocats ?",
      shareMessage:
        "Je me suis joint(e) à {{count}} champions qui défendent l'État de droit au Canada. Joignez-vous à nous !",
      youHaveJoined: 'Vous vous êtes joint(e) à un mouvement de',
      championsUpholding: "champions qui défendent l'État de droit",
      shareYourPledge: 'Partagez votre engagement :',
      shareOnWhatsApp: 'Partager sur WhatsApp',
      shareOnTwitter: 'Partager sur Twitter/X',
      shareOnTelegram: 'Partager sur Telegram',
      shareOnLinkedIn: 'Partager sur LinkedIn',
      shareViaEmail: 'Partager par courriel',
      copyLink: 'Copier le lien',
      copied: 'Copié !',
      continueYourJourney: 'Continuez votre parcours',
      emailSubject: "Engagement pour l'État de droit",

      byLawsPageTitle:
        'Règlements et serments des barreaux | Projet État de droit Canada',
      byLawsPageDescription:
        'Votre devoir de défendre la primauté du droit - Règlements provinciaux et conduite professionnelle',
      dutyToUphold: 'Votre devoir de défendre la primauté du droit',
      byLawsCount: 'de 12 règlements',

      ontario: 'Ontario',
      alberta: 'Alberta',
      britishColumbia: 'Colombie-Britannique',
      saskatchewan: 'Saskatchewan',
      quebec: 'Québec',
      novaScotia: 'Nouvelle-Écosse',
      princeEdwardIsland: 'Île-du-Prince-Édouard',
      newfoundlandLabrador: 'Terre-Neuve-et-Labrador',
      yukon: 'Yukon',
      northwestTerritories: 'Territoires du Nord-Ouest',
      nunavut: 'Nunavut',

      ontarioOathTitle:
        "21. (1) Le serment requis pour un demandeur de permis d'exercer le droit en Ontario comme avocat et notaire est le suivant :",
      ontarioOathContent:
        "Je ... accepte l'honneur et le privilège, le devoir et la responsabilité d'exercer le droit comme avocat et notaire dans la Province d'Ontario. Je protégerai et défendrai les droits et intérêts des personnes qui m'emploient. Je conduirai toutes les causes fidèlement et au meilleur de mes capacités. Je ne négligerai l'intérêt de personne et servirai fidèlement et représenterai diligemment les meilleurs intérêts de mon client. Je ne refuserai pas les causes de plainte raisonnablement fondées, ni ne promouvrai des poursuites sur des prétextes frivoles. Je ne pervertirai pas la loi pour favoriser ou préjudicier quiconque, mais en toutes choses je me conduirai honnêtement et avec intégrité et civilité. Je chercherai à assurer l'accès à la justice et aux services juridiques. Je chercherai à améliorer l'administration de la justice. Je défendrai la primauté du droit et sauvegarderai les droits et libertés de toutes les personnes. Je respecterai strictement et maintiendrai les normes éthiques qui régissent ma profession. Tout cela, je jure ou affirme de l'observer et de l'accomplir au meilleur de ma connaissance et de mes capacités.",
      ontarioSection: 'art. 21(1) du Règlement administratif 4',

      albertaOathIntro:
        "La règle 65.2(8) des Règles du Barreau de l'Alberta énonce le serment :",
      albertaOathContent:
        "Je conduirai, en tant qu'avocat et notaire, toutes les causes et affaires fidèlement et au meilleur de mes capacités. Je ne chercherai pas à détruire la propriété de quiconque. Je ne promouvrai pas de poursuites sur des prétextes frivoles. Je ne pervertirai pas la loi pour favoriser ou préjudicier quiconque, mais en toutes choses je me conduirai véritablement et avec intégrité. Je soutiendrai et maintiendrai l'intérêt du Souverain et celui du public selon la loi en vigueur en Alberta.",

      bcOathContent:
        "SERMENT D'AVOCAT ET DE NOTAIRE : Promettez-vous sincèrement et jurez-vous (ou affirmez-vous) que vous exercerez diligemment, fidèlement et au meilleur de vos capacités les fonctions d'avocat et de notaire; que vous ne promouvrez pas de poursuites sur des prétextes frivoles; que vous ne pervertirez pas la loi pour favoriser ou préjudicier quiconque; mais qu'en toutes choses vous vous conduirez véritablement et avec intégrité; et que vous soutiendrez la primauté du droit et les droits et libertés de toutes les personnes selon les lois du Canada et de la Province de la Colombie-Britannique, y compris la Constitution, qui reconnaît et affirme les droits ancestraux et issus de traités des Premières Nations, des Inuits et des Métis.",
      bcSection:
        "Serment selon l'art. 2-84(2)(a) des règles du Barreau de la Colombie-Britannique",

      saskPreface: 'PRÉFACE',
      saskRuleOfLaw:
        'La primauté du droit est une pierre angulaire de la Constitution et de la société canadienne. Les avocats sont des participants essentiels dans un système de justice qui fait progresser la primauté du droit.',
      saskRuleOfLawContinued:
        " Ils représentent les intérêts de leurs clients, sont membres d'une profession et sont officiers de la Cour. Ils jouissent d'une position unique et privilégiée dans la société.",
      saskProfessionalResponsibility:
        "Les avocats ont une responsabilité professionnelle et éthique de servir leurs clients, la profession et le système judiciaire dans des termes qui protègent et promeuvent leurs clients et l'intérêt public.",
      saskCodeDescription:
        "Ce Code ne doit pas être interprété comme exhaustif ou comme limitant d'autres devoirs impératifs à la protection du public et de l'intérêt public en général. Au lieu de cela, ce Code vise à articuler ces principes éthiques immuables qui assurent une philosophie où la profession juridique est dédiée aux hauts standards de comportement éthique qui sont requis et doivent évoluer dans le temps dans une société en changement.",
      saskCodeTitle:
        'Code de conduite professionnelle du Barreau de la Saskatchewan',
      saskOathIntro:
        "JE JURE SOLENNELLEMENT : (ou affirme) QU'en acceptant l'honneur, le privilège et le devoir d'exercer le droit dans la Province de la Saskatchewan,",
      saskOathContent:
        "je m'acquitterai diligemment, fidèlement et au meilleur de mes capacités des devoirs de ma charge et soutiendrai la primauté du droit.",
      saskOathConclusion:
        "Je chercherai à améliorer l'administration de la justice et à soutenir et maintenir les intérêts de mes concitoyens selon les lois en vigueur dans la Province de la Saskatchewan. Je me conduirai honnêtement et avec intégrité et civilité, et respecterai strictement et soutiendrai les normes éthiques qui régissent ma profession. QUE DIEU ME VIENNE EN AIDE. (supprimer si affirmé)",
      saskSection:
        'Formulaire A-14 lu avec la r. 715 des Règles du Barreau de la Saskatchewan',

      quebecPreamble: 'Préambule',
      quebecPreambleContent:
        "CONSIDÉRANT qu'un avocat est un serviteur de la justice; <br />CONSIDÉRANT que l'exercice de la profession d'avocat est fondé sur les valeurs et principes suivants qu'un avocat doit prendre en considération en toute circonstance : <br />(1) le respect des dispositions légales et la préservation de la primauté du droit; <br />(2) l'accès à la justice;",
      quebecPreliminary:
        "DISPOSITIONS PRÉLIMINAIRES <br />1. Ce code énonce les devoirs généraux et spécifiques qu'un avocat doit au public, aux clients, à l'administration de la justice et à la profession. <br />D. 129-2015, art. 1.",
      quebecApplication:
        "2. Ce code s'applique à tout avocat, quelle que soit la manière dont il exerce ses activités professionnelles. Ce code s'applique aussi, avec les adaptations nécessaires, à tout avocat agissant à l'égard d'un recours ou d'un différend qui le concerne personnellement. <br />Il s'applique en plus de toute autre règle de conduite professionnelle liée à l'exercice, par l'avocat, de toute autre activité, notamment un emploi, une fonction, une charge ou l'exploitation d'une entreprise.",
      quebecRuleOfLaw:
        "12. Un avocat doit soutenir le respect de la primauté du droit. Il peut toutefois, pour une raison valable et par des moyens légitimes, critiquer une disposition légale, contester l'interprétation ou l'application de celle-ci, ou chercher à la faire abroger, modifier ou remplacer.",
      quebecSection: 'Code de déontologie des avocats',

      nsOathTitle: "Serment ou affirmation lors de l'admission",
      nsOathIntro:
        "3.9.5 Toute personne admise au Barreau doit prêter ou affirmer le serment ou l'affirmation suivant lors de l'admission au Barreau :",
      nsOathContent:
        "\"Je, [nom], jure/affirme qu'en tant qu'avocat, je mènerai, au meilleur de ma connaissance et de mes capacités, toutes les affaires et procédures fidèlement, honnêtement et avec intégrité. Je soutiendrai la primauté du droit et défendrai et chercherai à améliorer l'administration de la justice. Je respecterai les normes éthiques et les règles régissant la pratique du droit en Nouvelle-Écosse.\"",
      nsRegulations:
        "Règlements de la Nova Scotia Barristers' Society, r. 3.9.5",
      nsPreface: 'Préface',
      nsRuleOfLawImportance:
        "L'une des caractéristiques d'une société libre et démocratique est la primauté du droit. Son importance se manifeste dans chaque activité juridique à laquelle participent les citoyens, de la vente de biens immobiliers aux poursuites pour meurtre en passant par le commerce international. En tant que participants à un système de justice qui fait progresser la primauté du droit, les avocats occupent une position unique et privilégiée dans la société.",
      nsRegulationContent:
        "Des pouvoirs d'autoréglementation ont été accordés à la profession juridique étant entendu que la profession exercera ces pouvoirs dans l'intérêt public. Une partie de cette responsabilité consiste à assurer la réglementation appropriée de la conduite professionnelle des avocats. Les membres de la profession juridique qui rédigent, plaident, interprètent et contestent la loi du pays peuvent attester de la robustesse du système juridique au Canada. Ils reconnaissent également la dépendance du public envers l'intégrité des personnes qui travaillent dans le système juridique et l'autorité exercée par les organismes directeurs de la profession. Bien que les avocats soient consultés pour leurs connaissances et capacités, on attend plus d'eux que de la perspicacité judiciaire. Une responsabilité éthique spéciale accompagne l'adhésion à la profession juridique.",
      nsCodeResponsibility:
        "Ce Code tente de définir et d'illustrer cette responsabilité en termes de relations professionnelles d'un avocat avec les clients, le système de justice et la profession.",
      nsIntegrityChapter: 'Chapitre 2.1 – Intégrité',
      nsIntegrityDuty:
        "Un avocat a le devoir d'exercer la pratique du droit et de s'acquitter de toutes ses responsabilités envers les clients, les tribunaux, le public et les autres membres de la profession de manière honorable et avec intégrité.",
      nsStandardsDuty:
        "Un avocat a le devoir de défendre les normes et la réputation de la profession juridique et d'aider à l'avancement de ses objectifs, organisations et institutions.",
      nsSection:
        "Code de conduite professionnelle de la Nova Scotia Barristers' Society",

      peiAdmissionTitle: 'Admission au Barreau, demande de',
      peiAdmissionContent:
        "Un demandeur d'inscription comme membre doit, dès réception de la notification que la demande du demandeur a été acceptée, faire une demande de la manière prescrite par les règlements à un juge de la Cour suprême pour l'administration des serments d'office. Administration des serments",
      peiJudgeContent:
        "(2) Le juge doit, dès réception d'un certificat du secrétaire-trésorier attestant que le demandeur s'est conformé à cette Loi et que la demande d'adhésion du demandeur a été acceptée, administrer le serment suivant au demandeur :",
      peiOathContent:
        "Je, [nom] jure [ou affirme] qu'en tant qu'avocat, solliciteur et attorney, je mènerai au meilleur de ma connaissance et de mes capacités toutes les affaires et procédures fidèlement, honnêtement et avec intégrité. Je soutiendrai la Constitution et défendrai et chercherai à améliorer l'administration de la justice. Je respecterai les normes éthiques et les règles régissant la pratique du droit à l'Île-du-Prince-Édouard. 1992, c.39, s.17; 2022,c.80,s.9(2); 2023,c.25,s.8.",
      peiLegalAct: 's. 17(2) Legal Profession Act R.S.P.E.I. 1988, c. L-6.1',
      peiPreface: 'Préface',
      peiRuleOfLawImportance:
        "L'une des caractéristiques d'une société libre et démocratique est la primauté du droit. Son importance se manifeste dans chaque activité juridique à laquelle participent les citoyens, de la vente de biens immobiliers aux poursuites pour meurtre en passant par le commerce international. En tant que participants à un système de justice qui fait progresser la primauté du droit, les avocats occupent une position unique et privilégiée dans la société.",
      peiRegulationContent:
        "Des pouvoirs d'autoréglementation ont été accordés à la profession juridique étant entendu que la profession exercera ces pouvoirs dans l'intérêt public. Une partie de cette responsabilité consiste à assurer la réglementation appropriée de la conduite professionnelle des avocats. Les membres de la profession juridique qui rédigent, plaident, interprètent et contestent la loi du pays peuvent attester de la robustesse du système juridique au Canada. Ils reconnaissent également la dépendance du public envers l'intégrité des personnes qui travaillent dans le système juridique et l'autorité exercée par les organismes directeurs de la profession. Bien que les avocats soient consultés pour leurs connaissances et capacités, on attend plus d'eux que de la perspicacité judiciaire. Une responsabilité éthique spéciale accompagne l'adhésion à la profession juridique.",
      peiCodeResponsibility:
        "Ce Code tente de définir et d'illustrer cette responsabilité en termes de relations professionnelles d'un avocat avec les clients, le système de justice et la profession.",
      peiIntegrityChapter: 'Chapitre 2.1 – Intégrité',
      peiIntegrityDuty:
        "Un avocat a le devoir d'exercer la pratique du droit et de s'acquitter de toutes ses responsabilités envers les clients, les tribunaux, le public et les autres membres de la profession de manière honorable et avec intégrité.",
      peiStandardsDuty:
        "Un avocat a le devoir de défendre les normes et la réputation de la profession juridique et d'aider à l'avancement de ses objectifs, organisations et institutions.",
      peiSection:
        'Code de conduite professionnelle de la Law Society of Prince Edward Island',

      nlSolicitorTitle: 'Inscription comme solliciteur',
      nlSolicitorContent:
        "(4) Avant l'inscription comme solliciteur, la personne qui fait la demande doit prêter et signer le serment ou l'affirmation d'allégeance et le serment ou l'affirmation suivant devant un juge de la Cour suprême en audience publique :",
      nlOathContent:
        '"Je jure [affirme] que je me conduirai vraiment et honnêtement dans la pratique d\'un solliciteur selon le meilleur de ma connaissance et de mes capacités" (Lorsqu\'un serment est prêté, ajouter "Que Dieu me vienne en aide")',
      nlLawSocietyAct: 's. 34(4) Law Society Act',
      nlPreface: 'Préface',
      nlRuleOfLawImportance:
        "L'une des caractéristiques d'une société libre et démocratique est la primauté du droit. Son importance se manifeste dans chaque activité juridique à laquelle participent les citoyens, de la vente de biens immobiliers aux poursuites pour meurtre en passant par le commerce international. En tant que participants à un système de justice qui fait progresser la primauté du droit, les avocats occupent une position unique et privilégiée dans la société.",
      nlRegulationContent:
        "Des pouvoirs d'autoréglementation ont été accordés à la profession juridique étant entendu que la profession exercera ces pouvoirs dans l'intérêt public. Une partie de cette responsabilité consiste à assurer la réglementation appropriée de la conduite professionnelle des avocats. Les membres de la profession juridique qui rédigent, plaident, interprètent et contestent la loi du pays peuvent attester de la robustesse du système juridique au Canada. Ils reconnaissent également la dépendance du public envers l'intégrité des personnes qui travaillent dans le système juridique et l'autorité exercée par les organismes directeurs de la profession. Bien que les avocats soient consultés pour leurs connaissances et capacités, on attend plus d'eux que de la perspicacité judiciaire. Une responsabilité éthique spéciale accompagne l'adhésion à la profession juridique.",
      nlCodeResponsibility:
        "Ce Code tente de définir et d'illustrer cette responsabilité en termes de relations professionnelles d'un avocat avec les clients, le système de justice et la profession.",
      nlIntegrityChapter: 'Chapitre 2.1 – Intégrité',
      nlIntegrityDuty:
        "Un avocat a le devoir d'exercer la pratique du droit et de s'acquitter de toutes ses responsabilités envers les clients, les tribunaux, le public et les autres membres de la profession de manière honorable et avec intégrité.",
      nlStandardsDuty:
        "Un avocat a le devoir de défendre les normes et la réputation de la profession juridique et d'aider à l'avancement de ses objectifs, organisations et institutions.",
      nlSection: 'Code de conduite professionnelle de T.-N.-L.',

      yukonOathTitle: '14 Serment ou affirmation',
      yukonOathContent:
        "(1) Avant de devenir membre, un demandeur qui se qualifie pour l'adhésion doit prêter et signer le serment ou l'affirmation suivant devant un juge : Je promets sincèrement et [jure] [affirme] que j'exercerai diligemment, fidèlement et au meilleur de mes capacités les [fonctions d'avocat et de notaire] [fonction d'étudiant articulé] [autre], que je ne promouvrai pas de poursuites sur des prétextes frivoles, que je ne pervertirai pas la loi pour favoriser ou préjudicier quiconque, mais qu'en toutes choses je me conduirai véritablement et avec intégrité, et que",
      yukonRuleOfLawContent:
        'je soutiendrai la primauté du droit et les droits et libertés de toutes les personnes selon les lois du Canada et de ce territoire.',
      yukonSection: 's. 14(1) Legal Profession Act 2007',

      nwtOathTitle: 'Serment ou affirmation',
      nwtOathIntro:
        "(2) Sous réserve du paragraphe (4), toute personne à qui un certificat est délivré en vertu du paragraphe (1) doit, avant de s'engager dans la pratique du droit dans les Territoires du Nord-Ouest, comparaître devant un juge de la Cour suprême, en personne ou par méthode audiovisuelle, et prêter et signer devant ce juge le serment ou l'affirmation suivant, ou un serment de la manière et de la forme et avec les cérémonies que la personne déclare être contraignantes pour sa conscience :",
      nwtOathContent:
        "Je, ................, promets sincèrement et jure (ou affirme) que je serai fidèle et porterai vraie allégeance à Sa Majesté Charles le Troisième (ou le Souverain régnant pour le moment); que je mènerai, en tant qu'avocat et notaire, toutes les causes et affaires fidèlement et au meilleur de mes capacités; que",
      nwtIntegrityContent:
        'je ne pervertirai pas la loi pour favoriser ou préjudicier une personne mais me conduirai en toutes choses véritablement et avec intégrité;',
      nwtOathConclusion:
        'et que je soutiendrai et maintiendrai les intérêts de Sa (ou Sa) Majesté et ceux de mes concitoyens selon les lois en vigueur dans les Territoires du Nord-Ouest. Que Dieu me vienne en aide. (omettre la dernière phrase dans une affirmation)',
      nwtLegalAct: 's.21(2) Legal Profession Act RSNWT 1988, c.L-2',
      nwtPreface: 'Préface',
      nwtRuleOfLawImportance:
        "L'une des caractéristiques d'une société libre et démocratique est la primauté du droit. Son importance se manifeste dans chaque activité juridique à laquelle participent les citoyens, de la vente de biens immobiliers aux poursuites pour meurtre en passant par le commerce international. En tant que participants à un système de justice qui fait progresser la primauté du droit, les avocats occupent une position unique et privilégiée dans la société.",
      nwtRegulationContent:
        "Des pouvoirs d'autoréglementation ont été accordés à la profession juridique étant entendu que la profession exercera ces pouvoirs dans l'intérêt public. Une partie de cette responsabilité consiste à assurer la réglementation appropriée de la conduite professionnelle des avocats. Les membres de la profession juridique qui rédigent, plaident, interprètent et contestent la loi du pays peuvent attester de la robustesse du système juridique au Canada. Ils reconnaissent également la dépendance du public envers l'intégrité des personnes qui travaillent dans le système juridique et l'autorité exercée par les organismes directeurs de la profession. Bien que les avocats soient consultés pour leurs connaissances et capacités, on attend plus d'eux que de la perspicacité judiciaire. Une responsabilité éthique spéciale accompagne l'adhésion à la profession juridique.",
      nwtCodeResponsibility:
        "Ce Code tente de définir et d'illustrer cette responsabilité en termes de relations professionnelles d'un avocat avec les clients, le système de justice et la profession.",
      nwtCodeGuidance:
        'Le Code énonce des déclarations de principe suivies de règles exemplaires et de commentaires, qui contextualisent les principes énoncés. Les principes sont des déclarations importantes des normes attendues de conduite éthique pour les avocats et informent les orientations plus spécifiques dans les règles et commentaires.',
      nwtCodeDescription:
        "Le Code aide à définir la pratique éthique et à identifier ce qui est questionnable éthiquement. Certaines sections du Code sont d'application plus générale, et certaines sections, en plus de fournir des conseils éthiques, peuvent être lues comme aspirationnelles. Le Code dans son ensemble devrait être considéré comme un guide fiable et instructif pour les avocats qui établit seulement les normes minimales de conduite professionnelle attendues des membres de la profession. Certaines circonstances qui soulèvent des considérations éthiques peuvent être suffisamment uniques que les conseils dans une règle ou un commentaire peuvent ne pas répondre à la question ou fournir la direction requise. Dans de tels cas, les avocats devraient consulter le Barreau, les praticiens seniors ou les tribunaux pour obtenir des conseils.",
      nwtIntegrityChapter: 'Chapitre 2 – Intégrité',
      nwtIntegrityDuty:
        "Un avocat a le devoir d'exercer la pratique du droit et de s'acquitter de toutes ses responsabilités envers les clients, les tribunaux, le public et les autres membres de la profession de manière honorable et avec intégrité.",
      nwtStandardsDuty:
        "Un avocat a le devoir de défendre les normes et la réputation de la profession juridique et d'aider à l'avancement de ses objectifs, organisations et institutions.",
      nwtSection: 'Code de conduite professionnelle des T.N.-O.',

      nunavutOathTitle: 'Serment',
      nunavutOathIntro:
        "(2) Sous réserve du paragraphe (4), toute personne à qui un certificat est délivré en vertu du paragraphe (1) doit, avant de s'engager dans la pratique du droit au Nunavut, prêter et souscrire au Nunavut devant un juge de la Cour de justice du Nunavut le serment suivant ou un serment de la manière et de la forme et avec les cérémonies que la personne déclare être contraignantes pour sa conscience :",
      nunavutOathContent:
        "Je, ................, promets sincèrement et jure que je serai fidèle et porterai vraie allégeance à Sa Majesté, le Roi Charles le Troisième (ou le Souverain régnant pour le moment); que je mènerai, en tant qu'avocat et notaire (ou autre désignation selon les règles), toutes les causes et affaires fidèlement et au meilleur de mes capacités; que",
      nunavutIntegrityContent:
        'je ne pervertirai pas la loi pour favoriser ou préjudicier une personne mais me conduirai en toutes choses véritablement et avec intégrité;',
      nunavutOathConclusion:
        'et que je soutiendrai et maintiendrai les intérêts de Sa Majesté et ceux de mes concitoyens selon les lois en vigueur au Nunavut. Que Dieu me vienne en aide.',
      nunavutLegalAct: 's.21(2) de la Legal Profession Act du Nunavut',
      nunavutPreface: 'Préface',
      nunavutRuleOfLawImportance:
        "L'une des caractéristiques d'une société libre et démocratique est la primauté du droit. Son importance se manifeste dans chaque activité juridique à laquelle participent les citoyens, de la vente de biens immobiliers aux poursuites pour meurtre en passant par le commerce international. En tant que participants à un système de justice qui fait progresser la primauté du droit, les avocats occupent une position unique et privilégiée dans la société.",
      nunavutRegulationContent:
        "Des pouvoirs d'autoréglementation ont été accordés à la profession juridique étant entendu que la profession exercera ces pouvoirs dans l'intérêt public. Une partie de cette responsabilité consiste à assurer la réglementation appropriée de la conduite professionnelle des avocats. Les membres de la profession juridique qui rédigent, plaident, interprètent et contestent la loi du pays peuvent attester de la robustesse du système juridique au Canada. Ils reconnaissent également la dépendance du public envers l'intégrité des personnes qui travaillent dans le système juridique et l'autorité exercée par les organismes directeurs de la profession. Bien que les avocats soient consultés pour leurs connaissances et capacités, on attend plus d'eux que de la perspicacité judiciaire. Une responsabilité éthique spéciale accompagne l'adhésion à la profession juridique.",
      nunavutCodeResponsibility:
        "Ce Code tente de définir et d'illustrer cette responsabilité en termes de relations professionnelles d'un avocat avec les clients, le système de justice et la profession.",
      nunavutIntegrityChapter: 'Chapitre 2.1 – Intégrité',
      nunavutIntegrityDuty:
        "Un avocat a le devoir d'exercer la pratique du droit et de s'acquitter de toutes ses responsabilités envers les clients, les tribunaux, le public et les autres membres de la profession de manière honorable et avec intégrité.",
      nunavutStandardsDuty:
        "Un avocat a le devoir de défendre les normes et la réputation de la profession juridique et d'aider à l'avancement de ses objectifs, organisations et institutions.",
      nunavutSection:
        'Code de conduite professionnelle de la Law Society of Nunavut',
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  })

export default i18n
