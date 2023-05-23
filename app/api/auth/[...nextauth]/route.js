import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@util/database";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },

    // before getting get a user session , we need to sign in first

    async signIn ({profile}) {
        try{
            await connectToDB();
            // check if the user is already exists
            // if not , create a new user and signed in 
            return true
        }catch (error) {
            console.log(error)
            return false
        }
    }
})

export { handler as GET , handler as POST }


