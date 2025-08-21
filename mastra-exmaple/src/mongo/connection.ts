import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "";

const DB_NAME = "dupont";

const global = {}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  cached.conn = await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
    dbName: DB_NAME,
  });
  return cached.conn;
};

export default dbConnect;
