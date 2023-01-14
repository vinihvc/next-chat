import { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from '@/types/next'

import { IMessage } from '@/models/message'

export default (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === 'POST') {
    const message = req.body as IMessage

    res.socket.server.io.emit('message', message)

    res.status(201).json(message)
  }

  res.status(405).end()
}
