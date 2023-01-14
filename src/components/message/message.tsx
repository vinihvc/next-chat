import { useAtom } from 'jotai'

import { IMessage } from '@/models/message'

import { userAtom } from '@/store/user'

type MessageProps = {
  message: IMessage
}

export const Message = ({ message }: MessageProps) => {
  const [user] = useAtom(userAtom)

  return (
    <div className='flex w-full items-center gap-2 py-1'>
      <span className='font-medium' style={{ color: message.color }}>
        {message.user === user.name ? 'Me' : message.user}:
      </span>

      <span className='break-all text-sm'>{message.message}</span>
    </div>
  )
}
