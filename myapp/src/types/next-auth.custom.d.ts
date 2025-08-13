// ✅ Must have at least one import to be treated as a module
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
   user: {   name?: string | null;  email?: string | null;  image?: string | null; role?: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {  role?: string | null;  }
}

declare module "next-auth/jwt" { interface JWT extends DefaultJWT { role?: string | null; }}





// // ✅ Must have at least one import to be treated as a module
// import NextAuth from "next-auth";
// import { DefaultSession, DefaultUser } from "next-auth";

// // ✅ Extend both Session and User
// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       role?: string | null;
//     } & DefaultSession["user"];
//   }

//   interface User extends DefaultUser {
//     role?: string | null;
//   }
// }




