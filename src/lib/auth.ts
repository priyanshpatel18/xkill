import { sign } from 'jsonwebtoken';
import prisma from '@/db';
import { AuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { Provider } from '@prisma/client';

const generateJWT = (payload: any) => {
  return sign(payload, process.env.SECRET_KEY || 'SeCr3T');
};

const getUserByEmail = async (email: string, provider?: Provider) => {
  return await prisma.user.findFirst({ where: { email, provider } });
};

const createUser = async (
  email: string,
  name?: string,
  image?: string,
  provider?: Provider,
) => {
  const user = prisma.$transaction(async (prisma) => {
    const result = await prisma.user.create({
      data: { email, name, image, provider },
    });

    const token = generateJWT(result.id);
    await prisma.user.update({
      where: { id: result.id },
      data: { token },
    });

    return result;
  });

  return user;
};

const authOptions: AuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.SECRET_KEY || 'SeCr3T',
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.id = user.id;
        token.token = user.token || 'undefined';
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
    signIn: async ({ account, profile }: any) => {
      let provider;
      let image;

      if (account?.provider === 'github') {
        provider = 'GITHUB' as Provider;
        image = profile.avatar_url;
      } else if (account?.provider === 'google') {
        provider = 'GOOGLE' as Provider;
        image = profile.picture;
      }

      if (profile.email) {
        let user = await getUserByEmail(profile.email, provider);

        if (!user) {
          user = await createUser(profile.email, profile.name, image, provider);
        } else {
          const token = generateJWT(user.id);
          await prisma.user.update({
            where: { id: user.id },
            data: { token },
          });
        }
      }

      return true;
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.includes('/sign-in') || url.includes('/sign-up')) {
        return `${baseUrl}/?status=200`;
      }
      return baseUrl;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
};

export default authOptions;
