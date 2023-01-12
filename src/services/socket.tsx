import { Socket, Server } from 'socket.io'

export const messageHandler = (io: Server, socket: Socket) => {
  const createdMessage = (msg: string) => {
    socket.broadcast.emit('newIncomingMessage', msg)
  }

  socket.on('createdMessage', createdMessage)
}
