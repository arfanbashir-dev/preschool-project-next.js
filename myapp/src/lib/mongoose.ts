import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// Extend NodeJS Global type to cache the connection
declare global {                         
  var mongooseCache: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  } | undefined;
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export async function connectDB(): Promise<Mongoose> {
  if (cached!.conn) {  return cached!.conn;  }

  if (!cached!.promise) {
    cached!.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => { console.log("✅ Connected to MongoDB");
        return mongooseInstance;
      })
      .catch((err) => { console.error("❌ MongoDB connection error:", err);
        throw err;
      });
  }

  cached!.conn = await cached!.promise;
  return cached!.conn;
}



// import mongoose from "mongoose";

// export async function connectDB() {
//   if (mongoose.connection.readyState === 1) return;

//   try {
//     await mongoose.connect(process.env.MONGODB_URI!);
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     process.exit(1);
//   }
// }








// // src/lib/mongoose.ts the below  is for local database
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// export async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       dbName: 'TechSchool',
//       bufferCommands: false,
//     }).then((mongooseInstance) => {
//       return mongooseInstance;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }





