import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SECRET as string,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
    }),
  ],

  callbacks: {
    session: async ({ session, profile }: any) => ({
      ...session,
      profile,
    }),

    signIn: async ({ user, account, profile }: any) => {
      try {
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
