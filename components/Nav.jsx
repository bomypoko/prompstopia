'use client'

import Link from 'next/link' // allow us to navigate to the other page
import Image from 'next/image' // optimize images when loading 
import { useState , useEffect } from 'react' // render from Client side ( Use client)
import { signIn , signOut , useSession , getProviders } from 'next-auth/react' // for user to  login and logout 
const Nav = () => {
  return (
    <div>Nav</div>
  )
}

export default Nav