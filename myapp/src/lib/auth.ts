import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongoose";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import type { NextAuthOptions, User as NextAuthUser, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email });

        if (!user) throw new Error("No user found");

        const isPasswordCorrect = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isPasswordCorrect) throw new Error("Invalid credentials");

        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role
        } as NextAuthUser;
      },
    }),
  ],

  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: NextAuthUser }) {
      if (user) token.role = user.role;
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) session.user.role = token.role;
      return session;
    },
  },

  pages: { signIn: "/login" },
};


