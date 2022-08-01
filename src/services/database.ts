import mongoose from 'mongoose';

const startDatabaseConnection = () => {
  const mongoDBLink: string = 'mongodb://market_database:27017/review';

  mongoose.connect(mongoDBLink, { useNewUrlParser: true });

  const database = mongoose.connection;
  database.once('open', () => {
    console.log('MongoDB connected');
  });

  database.on('error', (error) => {
    console.log('MongoDB Error: ', error);
  });
};

export { startDatabaseConnection };
