import { Socket } from 'socket.io';

export interface Global {
  onlineUsers: Map<string, string>;
  chatSocket: Socket;
}