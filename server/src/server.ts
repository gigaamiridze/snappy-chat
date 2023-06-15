import { app } from './app';
import { PORT } from './config';
import { connectDB } from './database';
import { startChatSocket } from './chatSocket';

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

    startChatSocket(server);
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
}

startServer();