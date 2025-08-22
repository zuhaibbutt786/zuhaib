import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zuhaib Hussain Butt - Senior Data Scientist & AI Engineer',
  description: 'Freelance Data Scientist and AI/ML Engineer specializing in Big Data, LLMs/RAG, Computer Vision, and analytics dashboards. Available for projects on Fiverr/Upwork & direct contracts.',
  keywords: 'freelance data scientist, AI freelancer, data science freelancing, big data engineer freelancer, data analytics freelancing, machine learning consultant, computer vision freelance, RAG developer, LLM engineer, Power BI dashboards',
  authors: [{ name: 'Zuhaib Hussain Butt' }],
  openGraph: {
    title: 'Zuhaib Hussain Butt — Data Science & AI Freelancer',
    description: 'End‑to‑end ML/AI, Big Data, CV/NLP, BI dashboards, and cloud deployments for startups & enterprises.',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuhaib Hussain Butt — AI Freelancer',
    description: 'Hire a Senior Data Scientist for ML, Big Data & Analytics projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
