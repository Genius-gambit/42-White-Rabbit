import NextAuth from "next-auth";
import FortyTwoProvider from "next-auth/providers/42-school";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FortyTwoProvider({
      clientId:
        "u-s4t2ud-2285edf4522c080a1943c73d97e1e87eeb56e396530688e2b4669e67d695fa16",
      clientSecret:
        "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",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
