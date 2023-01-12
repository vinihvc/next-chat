'use client'

import { useState, useRef, FormEvent } from 'react'

import { useChat } from '@/hooks/use-chat'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Input } from '@/components/input'
import { Chat } from '@/components/chat'

const RootPage = () => {
  const [message, setMessage] = useState('')

  const username = useRef(`Anonymous${Math.floor(Math.random() * 1000)}`)

  const { messages, sendMessage } = useChat(username.current)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (message === '') return

    sendMessage(message)

    setMessage('')
  }

  return (
    <Container>
      <Chat messages={messages} />

      <form
        className="w-full flex shadow-xl mt-5 space-x-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="New message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button type="submit">Send</Button>
      </form>
    </Container>
  )
}

export default RootPage
