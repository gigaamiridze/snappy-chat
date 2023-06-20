export enum ApiRoutes {
  HOST = 'https://snappy-chat-snas.onrender.com',
  REGISTER = `${HOST}/api/auth/register`,
  LOGIN = `${HOST}/api/auth/login`,
  SET_AVATAR = `${HOST}/api/auth/set-avatar`,
  ALL_USER = `${HOST}/api/users`,
  ADD_MESSAGE = `${HOST}/api/messages/add`,
  GET_MESSAGES = `${HOST}/api/messages/get`,
}