import { Socket } from 'socket.io';

export interface IGlobal {
  onlineUsers: Map<string, string>;
  chatSocket: Socket;
}