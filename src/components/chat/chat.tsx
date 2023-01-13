import { useEffect, useRef } from 'react'

import { Message } from '@/models/message'

import { useConst } from '@/hooks/use-const'

import { generateRandomColor } from '@/utils/color'

type ChatProps = {
  messages: Array<Message>
} & React.HTMLAttributes<HTMLDivElement>

export const Chat = ({ messages, ...props }: ChatProps) => {
  const color = useConst(generateRandomColor)

  const wrapper = useRef<HTMLDivElement>(null)

  // Scroll to bottom when new message is added
  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.scrollTop = wrapper.current.scrollHeight
    }
  }, [messages])

  return (
    <div className='h-[20rem] w-full shadow-xl' {...props}>
      <div
        ref={wrapper}
        className='h-full w-full overflow-x-hidden overflow-y-scroll bg-chat p-2'
      >
        {messages.map((msg, i) => (
          <div className='flex w-full gap-2 py-1 px-2 text-white' key={i}>
            <span className='font-medium' style={{ color }}>
              {msg.author}:
            </span>

            <span className='break-all text-sm'>{msg.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
