// scripts/createUser.cts

//run this command { npx ts-node scripts/createUser.cts }

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // Load env file

import bcrypt from 'bcryptjs';
import { connectDB } from '../src/lib/mongoose';
import User from '../src/model/User';

async function createUser() {
  await connectDB();
  
  const name = 'admin';
  const email = 'admin@example.com';
  const password = 'admin123';
  const role = 'admin';

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    console.log('❗ User already exists');
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({name, email, password: hashedPassword, role });

  console.log(`✅ ${role.toUpperCase()} user created: ${email}`);
}

createUser();




// // scripts/createUser.cts
// import dotenv from 'dotenv';
// dotenv.config({ path: '.env.local' }); // 👈 manually load the right file

// import bcrypt from 'bcryptjs';
// import { connectDB } from '../src/lib/mongoose';
// import User from '../src/model/User';


// async function createUser() {

//   await connectDB();

//   const email = 'admin@example.com';
//   const password = 'admin123';
//   const role = 'admin';

//   const existingUser = await User.findOne({ email });
//   if (existingUser) { console.log('❗ User already exists');   return  ;  }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   await User.create({ email: 'admin@example.com', password: hashedPassword, role: 'admin' });

  

//   console.log(`✅ ${role.toUpperCase()} user created: ${email}`);
// }

// createUser();
