import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { db } from '@config/firebase';
import * as firstoreFunctions from 'firebase/firestore';

export default NextAuth({
  adapter: FirebaseAdapter({
    db,
    ...firstoreFunctions,
  }),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_ID || '',
      clientSecret: process.env.KAKAO_SECRET || '',
    }),
  ],

  session: {
    maxAge: 60 * 60 * 3,
  },

  pages: {
    signIn: '/auth/signIn',
  },
});
