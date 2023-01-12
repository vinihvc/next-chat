import { Container } from '@/components/container'

import { ChatIcon } from '@/libs/icons/message'

type HeaderProps = React.HTMLAttributes<HTMLDivElement>

export const Header = (props: HeaderProps) => {
  return (
    <header
      className="h-[70px] flex flex-col justify-center bg-header"
      {...props}
    >
      <Container>
        <nav className="flex items-center justify-between flex-wrap">
          <span className="flex space-x-2 items-center select-none">
            <ChatIcon />

            <span className="font-bold text-xl tracking-wide">
              Next Messenger
            </span>
          </span>
        </nav>
      </Container>
    </header>
  )
}
