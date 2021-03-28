import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { username } = credentials;
        return { id: username, name: username, email: username };
      },
    }),
  ],
});
