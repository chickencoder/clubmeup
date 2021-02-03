import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import { PrismaClient } from "@prisma/client";
import { session } from "next-auth/client";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_API_KEY,
      clientSecret: process.env.TWITTER_API_SECRET,
    }),
  ],
  callbacks: {
    async session(session, user) {
      if (user.id) {
        session.userId = user.id;
      }
      return session;
    },
  },
  adapter: Adapters.Prisma.Adapter({ prisma }),
});
