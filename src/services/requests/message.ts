import { IMessage } from '@/models/message'

export const postMessage = async (data: IMessage) => {
  await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
