import { Nunito_Sans } from '@next/font/google'

import { Header } from '@/components/header'

import { clsx } from '@/utils/classname'

import '@/styles/globals.css'

const globalFont = Nunito_Sans({
  weight: ['300', '400', '600', '700'],
})

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

        <main className='flex flex-1 items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
