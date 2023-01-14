import { useEffect, useRef } from 'react'

import { IMessage } from '@/models/message'

import { Container } from '@/components/container'
import { Message, MessageEmpty } from '@/components/message'

import { clsx } from '@/utils/classname'

type ChatProps = {
  messages: Array<IMessage>
} & React.HTMLAttributes<HTMLDivElement>

export const Chat = ({ messages, className, ...props }: ChatProps) => {
  const wrapper = useRef<HTMLDivElement>(null)

  const isEmpty = messages.length === 0

  // Scroll to bottom when new message is added
  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.scrollTop = wrapper.current.scrollHeight
    }
  }, [messages])

  return (
    <Container
      className={clsx('flex h-full flex-1 flex-col px-0', className)}
      {...props}
    >
      <div
        className='flex h-full flex-1 flex-col rounded-lg bg-chat p-4 shadow-lg'
        ref={wrapper}
      >
        {isEmpty && (
          <div className='flex h-full flex-1 items-center justify-center'>
            <MessageEmpty />
          </div>
        )}

        {!isEmpty &&
          messages.map((msg, i) => <Message key={i} message={msg} />)}
      </div>
    </Container>
  )
}
