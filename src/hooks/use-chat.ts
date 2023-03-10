import { useState } from 'react'

import SocketClient from 'socket.io-client'

import { useAtom } from 'jotai'

import { IMessage } from '@/models/message'

import { userAtom } from '@/store/user'

import { useEffectOnce } from '@/hooks/use-effect-once'

import { postMessage } from '@/services/requests/message'

export const useChat = () => {
  const [user] = useAtom(userAtom)

  const [connected, setConnected] = useState(false)
  const [sending, setSending] = useState(false)
  const [chat, setChat] = useState<IMessage[]>([])

  useEffectOnce(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const socket = SocketClient.connect(process.env.BASE_URL, {
      path: '/api/socket',
    })

    socket.on('connect', () => {
      setConnected(true)
    })

    socket.on('message', (message: IMessage) => {
      setChat((e) => [...e, message])
    })

    if (socket) return () => socket.disconnect()
  })

  const sendMessage = async (message: string) => {
    if (sending) return

    try {
      setSending(true)

      await postMessage({ user: user.name, message, color: user.color })
    } catch (error) {
      console.error(error)
    } finally {
      setSending(false)
    }
  }

  return {
    chat,
    connected,
    sendMessage,
    sending,
  }
}
