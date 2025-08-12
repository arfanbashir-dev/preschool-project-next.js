// src/lib/mongoose.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'TechSchool',
      bufferCommands: false,
    }).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}






// export async function connectDB() {
//   const MONGODB_URI = process.env.MONGODB_URI;

//   if (!MONGODB_URI) {
//     throw new Error('❌ Please define the MONGODB_URI environment variable');
//   }

//   let cached = (global as any).mongoose;

//   if (!cached) {
//     cached = (global as any).mongoose = { conn: null, promise: null };
//   }

//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       dbName: 'TechSchool',
//       bufferCommands: false,
//     }).then((mongooseInstance) => {
//       console.log('✅ MongoDB connected');
//       return mongooseInstance;
//     }).catch((error) => {
//       console.error('❌ MongoDB connection error:', error);
//       throw error;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }













// lib/mongoose.ts
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error('❌ Please define the MONGODB_URI environment variable');
// }

// // Global is used here to persist connection across hot reloads in dev
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
//       console.log('✅ MongoDB connected');
//       return mongooseInstance;
//     }).catch((error) => {
//       console.error('❌ MongoDB connection error:', error);
//       throw error;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }





