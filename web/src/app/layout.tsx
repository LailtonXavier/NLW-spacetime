import React, { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJanjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJanjuree = BaiJanjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijan',
})

export const metadata = {
  title: 'NWL Spacetime',
  description: 'Project created by Lailton',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJanjuree.variable} bg-gray-900 font-sans text-gray-100 `}
      >
        {children}
      </body>
    </html>
  )
}
