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
    <div className="h-[20rem] w-full shadow-xl" {...props}>
      <div
        ref={wrapper}
        className="h-full w-full overflow-y-scroll overflow-x-hidden bg-chat p-2"
      >
        {messages.map((msg, i) => (
          <div className="flex gap-2 text-white w-full py-1 px-2" key={i}>
            <span className="font-medium" style={{ color }}>
              {msg.author}:
            </span>

            <span className="font-sm break-all">{msg.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
