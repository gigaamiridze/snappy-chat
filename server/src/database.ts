import mongoose, { ConnectOptions } from 'mongoose';
import { MONGODB_URL } from './config';

export const connectDB = async () => {
  try {
    if (!MONGODB_URL) {
      throw new Error('MongoDB URL is not defined');
    }

    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}