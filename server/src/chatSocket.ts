import { Server as SocketServer, Socket } from 'socket.io';
import { Server } from 'http';
import { ChatEvent } from './constants';
import { IGlobal, ISocketData } from './interfaces';
import { CLIENT_URL } from './config';

const { CONNECTION, ADD_USER, MESSAGE, RECEIVE } = ChatEvent;
declare const global: IGlobal;

export const startChatSocket = (server: Server) => {
  const io = new SocketServer(server, {
    cors: {
      origin: CLIENT_URL,
      credentials: true, 
    }
  });

  global.onlineUsers = new Map<string, string>();

  io.on(CONNECTION, (socket: Socket) => {
    global.chatSocket = socket;
  
    socket.on(ADD_USER, (userId: string) => {
      global.onlineUsers.set(userId, socket.id);
    });
  
    socket.on(MESSAGE, (data: ISocketData) => {
      const sendUserSocket = global.onlineUsers.get(data.to);
  
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit(RECEIVE, data.message);
      }
    });
  });
}