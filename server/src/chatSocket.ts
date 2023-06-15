import { Server, Socket } from 'socket.io';
import { ChatEvent } from './constants';
import { Global } from './interfaces';
import { CLIENT_URL } from './config';

const { CONNECTION, ADD_USER, MESSAGE, RECEIVE } = ChatEvent;
declare const global: Global;