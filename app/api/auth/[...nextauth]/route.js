import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@util/database";

import User from '@models/user'

// NextAuth contain of 2 { provider and callback }


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({ 
            email : session.user.email
        })

            session.user.id = sessionUser._id.toString();

            return session;
    },

    callbacks: {
        async signIn ({profile}) {
            try{
    
                await connectToDB();
                // check if the user is already exists
                const userExists = await User.findOne({
                    email: profile.email
                })
                // if not , create a new user and signed in 
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" " , "").toLowerCase(),
                        image: profile.picture
                    })
                }
    
                return true
    
            }catch (error) {
                console.log(error)
                return false
            }
        }
    }

    // before getting get a user session , we need to sign in first

    
})

export { handler as GET , handler as POST }


