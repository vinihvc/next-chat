import { Server } from 'socket.io'

import { messageHandler } from '@/services/socket'

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    res.end()
    return
  }

  const io = new Server(res.socket.server)
  res.socket.server.io = io

  const onConnection = (socket) => {
    messageHandler(io, socket)
  }

  io.on('connection', onConnection)

  res.end()
}
