import { getServerSession, type NextAuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import type { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && user.id) {
        (token as JWT).uid = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const uid = (token as JWT).uid ?? token.sub;
        if (uid) session.user.id = uid;
      }
      return session;
    },
  },
};

export async function auth() {
  return getServerSession(authOptions);
}
