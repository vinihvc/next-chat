import { Josefin_Sans } from '@next/font/google'

import { Header } from '@/components/header'

import { clsx } from '@/utils/classname'

import '@/styles/globals.css'

const globalFont = Josefin_Sans()

type LayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang='en' className={clsx('bg-bg text-white', globalFont.className)}>
      <head>
        <title>Next Messenger</title>
      </head>

      <body className='flex min-h-screen flex-col'>
        <Header />

        <main className='flex max-h-max flex-1 flex-col items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
