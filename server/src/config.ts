import dotenv from 'dotenv';

dotenv.config();

export const { PORT, MONGODB_URL } = process.env;