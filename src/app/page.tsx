'use client'

import React, { FormEvent, useState } from 'react'

import { useChat } from '@/hooks/use-chat'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Chat } from '@/components/chat'
import { Container } from '@/components/container'

const RootPage = () => {
  const { chat, connected, sendMessage, sending } = useChat()
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!message) return

    sendMessage(message)
    setMessage('')
  }

  return (
    <>
      <Chat className='md:mt-5' messages={chat} />

      <form
        className='sticky bottom-0 h-full w-full py-5'
        onSubmit={handleSubmit}
      >
        <Container className='flex space-x-4'>
          <Input
            value={message}
            placeholder={connected ? 'Type a message...' : 'Connecting...'}
            disabled={!connected}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            type='submit'
            className='w-[40px] rounded-full px-0'
            disabled={!connected || sending}
          >
            {'>'}
          </Button>
        </Container>
      </form>
    </>
  )
}

export default RootPage
