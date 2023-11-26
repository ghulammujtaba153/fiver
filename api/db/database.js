import { connect } from 'mongoose';
import dotenv from 'dotenv';

export const connectToDatabase = async () => {
    dotenv.config()
  try {
    const uri = process.env.DB_URI; 
    await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

