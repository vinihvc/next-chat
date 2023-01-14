import { NextApiRequest } from 'next'

import { Server as ServerIO } from 'socket.io'

import { Server as NetServer } from 'http'

import { NextApiResponseServerIO } from '@/types/next'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log('New Socket.io server...')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const httpServer: NetServer = res.socket.server as any

    const io = new ServerIO(httpServer, {
      path: '/api/socket',
    })

    res.socket.server.io = io
  }

  res.end()
}
