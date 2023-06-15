import dotenv from 'dotenv';

dotenv.config();

export const { PORT, MONGODB_URL, CLIENT_URL } = process.env;