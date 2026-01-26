'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'

type ActivePanel = 'none' | 'experience' | 'projects' | 'education' | 'contact'

export default function Home() {
  const [activePanel, setActivePanel] = useState<ActivePanel>('none')
  const [copied, setCopied] = useState<string | null>(null)

  // Auto-open experience on desktop
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024 // lg breakpoint
    if (isDesktop) {
      setActivePanel('experience')
    }
  }, [])

  const technicalSkills = {
    current: ['TypeScript', 'Nest.js', 'React', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
  }

  const menuItems = [
    { id: 'experience' as const, label: 'Experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'projects' as const, label: 'Projects', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { id: 'education' as const, label: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
    { id: 'contact' as const, label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ]

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <main className="h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <ThemeToggle />

      {/* Copy notification */}
      {copied && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md text-sm font-medium shadow-lg">
          {copied} copied to clipboard
        </div>
      )}

      <div className="h-full flex">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16">
          {/* Header Section */}
          <div className="max-w-2xl">
            {/* Name and Photo */}
            <div className="flex items-center gap-6 mb-6">
              <Image
                src="/images/profile.jpg"
                alt="Evtim Ivanov"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                priority
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  Evtim Ivanov
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Specializing in TypeScript, React, NestJS, and Web3 development.
              Building scalable applications and blockchain solutions.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {technicalSkills.current.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-300 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-10">
              <button
                onClick={() => copyToClipboard('evtim.nik@gmail.com', 'Email')}
                className="p-2.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700"
                title="Copy email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <a
                href="https://linkedin.com/in/evtim-ivanov"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/ZohanBG"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <button
                onClick={() => copyToClipboard('+359-895-817-227', 'Phone')}
                className="p-2.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700"
                title="Copy phone"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePanel(activePanel === item.id ? 'none' : item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all duration-200 border ${
                    activePanel === item.id
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                  {item.label}
                  <svg className={`w-4 h-4 ml-auto transition-transform ${activePanel === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}

              {/* CV Download */}
              <a
                href="/pdf/Evtim-Ivanov-CV.pdf"
                download
                className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all duration-200 border bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className={`fixed top-0 right-0 h-full bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 transition-all duration-500 overflow-hidden z-40 ${
          activePanel !== 'none' ? 'w-full md:w-1/2' : 'w-0'
        }`}>
          <div className="h-full overflow-y-auto p-8">
            {/* Close button */}
            <button
              onClick={() => setActivePanel('none')}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {activePanel === 'experience' && <ExperiencePanel />}
            {activePanel === 'projects' && <ProjectsPanel />}
            {activePanel === 'education' && <EducationPanel />}
            {activePanel === 'contact' && <ContactPanel copyToClipboard={copyToClipboard} />}
          </div>
        </div>
      </div>
    </main>
  )
}

function ExperiencePanel() {
  const experiences = [
    {
      title: 'Junior Web3 Developer',
      company: 'LimeChain',
      period: 'Oct 2025 - Jan 2025',
      responsibilities: [
        'Ethereum Data Fetcher: Built an Etherscan-like platform using NestJS and Vite to index and display Ethereum blocks, transactions, and address data',
        'Multichain Bridge: Developed a validator-based cross-chain bridge with Solidity, NestJS, and a Next.js UI to enable secure asset transfers across multiple networks',
      ],
    },
    {
      title: 'Junior Backend Developer',
      company: 'Telebid Pro',
      period: 'July 2024 - Sep 2025',
      subtitle: 'Started as Trainee, promoted to Junior Developer',
      responsibilities: [
        'Optimized complex SQL queries in PostgreSQL to improve performance and reduce response times',
        'Developed backend integrations with third-party platforms including PayPal and Firebase',
        'Designed and implemented a custom protocol using WebSockets to replace traditional HTTP request/response, significantly reducing header overhead and improving efficiency for clients on slow connections',
        'Created a reporting module to generate and deliver analytical insights based on application data',
        'Participated in code and specification reviews to ensure quality and alignment with project goals',
      ],
    },
  ]

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-slate-300 dark:border-slate-600 pl-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
            {exp.subtitle && (
              <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-3">{exp.subtitle}</p>
            )}
            <ul className="space-y-2 mt-3">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectsPanel() {
  const projects = [
    {
      title: 'Ethereum Data Fetcher',
      description: 'Built an Etherscan-like platform using NestJS and Vite to index and display Ethereum blocks, transactions, and address data. Features wallet authentication (SIWE), transaction search, and RLP decoding.',
      tech: ['NestJS', 'Vite', 'TypeScript', 'Ethereum', 'PostgreSQL', 'Prisma'],
      liveUrl: 'https://ethfetcher.evtim.dev',
      githubUrls: [
        { label: 'Frontend', url: 'https://github.com/ZohanBG/ethereum-fetcher-fe' },
        { label: 'Backend', url: 'https://github.com/ZohanBG/ethereum-fetcher' },
      ],
    },
    {
      title: 'Multichain Bridge',
      description: 'Developed a validator-based cross-chain bridge with Solidity, NestJS, and a Next.js UI to enable secure asset transfers across multiple networks.',
      tech: ['Solidity', 'NestJS', 'Next.js', 'Web3'],
      wip: true,
    },
  ]

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              {project.wip && (
                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 rounded text-xs font-medium">
                  Work in Progress
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>
            {(project.liveUrl || project.githubUrls) && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubUrls?.map((gh) => (
                  <a
                    key={gh.url}
                    href={gh.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 dark:bg-slate-600 text-white rounded text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    {gh.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function EducationPanel() {
  const education = [
    {
      degree: 'Bachelor of Cybersecurity',
      school: 'Technical University of Sofia',
      period: '2022 - 2026',
    },
    {
      degree: 'Software Development Courses',
      school: 'SoftUni',
      period: '2017 - 2022',
      courses: [
        'Programming Basics with C#',
        'C# Fundamentals',
        'C# Advanced',
        'C# OOP',
        'JS Advanced',
        'JS Applications',
        'MS SQL',
        'ASP.NET Fundamentals',
        'ASP.NET Advanced',
      ],
    },
  ]

  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-slate-300 dark:border-slate-600 pl-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.degree}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{edu.period}</p>
            {edu.courses && (
              <div className="flex flex-wrap gap-2 mt-3">
                {edu.courses.map((course) => (
                  <span key={course} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs">
                    {course}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactPanel({ copyToClipboard }: { copyToClipboard: (text: string, type: string) => void }) {
  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact</h2>
      <div className="space-y-4">
        <button
          onClick={() => copyToClipboard('evtim.nik@gmail.com', 'Email')}
          className="w-full flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-left"
        >
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <p className="text-slate-900 dark:text-white">evtim.nik@gmail.com</p>
          </div>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>

        <button
          onClick={() => copyToClipboard('+359-895-817-227', 'Phone')}
          className="w-full flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-left"
        >
          <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <p className="text-slate-900 dark:text-white">+359-895-817-227</p>
          </div>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>

        <a
          href="https://linkedin.com/in/evtim-ivanov"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
        >
          <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <div className="flex-1">
            <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
            <p className="text-slate-900 dark:text-white">linkedin.com/in/evtim-ivanov</p>
          </div>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href="https://github.com/ZohanBG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
        >
          <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
            <p className="text-slate-900 dark:text-white">github.com/ZohanBG</p>
          </div>
          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
