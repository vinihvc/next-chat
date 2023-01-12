import { useState } from 'react'

import { useAtom } from 'jotai'

import { Message } from '@/models/message'

import { socketAtom } from '@/store/socket'

import { useEffectOnce } from '@/hooks/use-effect-once'

export const useChat = (username: string) => {
  const [messages, setMessages] = useState<Array<Message>>([])

  const [socket] = useAtom(socketAtom)

  useEffectOnce(() => {
    socketInitializer()
  })

  const socketInitializer = async () => {
    if (!socket) return

    await fetch('/api/socket')

    socket.on('newIncomingMessage', ({ author, message }: Message) => {
      setMessages((e) => [...e, { author, message }])
    })
  }

  const sendMessage = async (message: string) => {
    socket.emit('createdMessage', { author: username, message })

    setMessages((currentMsg) => [...currentMsg, { author: username, message }])
  }

  return {
    messages,
    sendMessage,
  }
}
