const host = 'http://localhost:5000';
const registerRoute = `${host}/api/auth/register`;
const loginRoute = `${host}/api/auth/login`;
const avatarRoute = `${host}/api/auth/set-avatar`;
const usersRoute = `${host}/api/users`;
const addMessageRoute = `${host}/api/messages/add`;
const getMessagesRoute = `${host}/api/messages/get`;

export { 
  registerRoute, 
  loginRoute, 
  avatarRoute, 
  usersRoute,
  addMessageRoute,
  getMessagesRoute 
};