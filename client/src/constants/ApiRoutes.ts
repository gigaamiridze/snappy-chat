export enum ApiRoutes {
  HOST = 'http://localhost:5000',
  REGISTER = `${HOST}/api/auth/register`,
  LOGIN = `${HOST}/api/auth/login`,
  SET_AVATAR = `${HOST}/api/auth/set-avatar`,
  ALL_USER = `${HOST}/api/users`,
  ADD_MESSAGE = `${HOST}/api/messages/add`,
  GET_MESSAGES = `${HOST}/api/messages/get`,
}