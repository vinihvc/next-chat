import { Container } from '@/components/container'

import { ChatIcon } from '@/libs/icons/message'

type HeaderProps = React.HTMLAttributes<HTMLDivElement>

export const Header = (props: HeaderProps) => {
  return (
    <header
      className='sticky top-0 flex h-[70px] flex-col justify-center bg-header shadow-sm'
      {...props}
    >
      <Container>
        <nav className='flex flex-wrap items-center justify-between'>
          <span className='flex select-none items-center space-x-2'>
            <ChatIcon />

            <span className='text-xl font-bold tracking-wide'>
              Next Messenger
            </span>
          </span>
        </nav>
      </Container>
    </header>
  )
}
