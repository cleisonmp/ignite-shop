//Docs
//https://next-auth.js.org/getting-started/example
export const NextAuth = 'NextAuth'
/*import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: { params: { scope: 'read:user,user:email' } },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, user }) {},
    async signIn({ user }) {
      //const { email } = user
    },
  },
})
*/
