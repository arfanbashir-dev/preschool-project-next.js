// ✅ Must have at least one import to be treated as a module
import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";

// ✅ Extend both Session and User
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string | null;
  }
}





// src/types/next-auth.d.ts
// import NextAuth from "next-auth"; // 👈 REQUIRED for module augmentation

// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       role?: string | null; // ✅ this fixes session.user.role
//     };
//   }

//   interface User {
//     role?: string | null;
//   }
// }


// import NextAuth from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       role?: string | null;  // your custom field
//     };
//   }

//   interface User {
//     role?: string | null;
//   }
// }
