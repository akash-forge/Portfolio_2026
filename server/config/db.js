import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Determine the URI, fallback to a local distinct development DB
    const connUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db';
    const conn = await mongoose.connect(connUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Do not exit process if local mongo fails to allow server to still run
    // process.exit(1);
  }
};

export default connectDB;
