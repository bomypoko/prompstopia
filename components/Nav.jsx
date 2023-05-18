'use client'

import Link from 'next/link' // allow us to navigate to the other page
import Image from 'next/image' // optimize images when loading 
import { useState , useEffect } from 'react' // render from Client side ( Use client)
import { signIn , signOut , useSession , getProviders } from 'next-auth/react' // for user to  login and logout 
const Nav = () => {

    const isUserLoggedIn = true

    return (

        <nav className='w-full flex-between mb-16 pt-3 '>


            <Link href="/" className='flex gap-2 flex-center'> 
                <Image 
                    src="/assets/images/logo.svg" 
                    width={30} height={300}
                    alt="Promptopia Logo"
                    className='object-contain'/> 
            </Link>
            <p className='logo_text'> Promptopia</p>


            {/* Mobile Navigation  */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                
                        <div className='flex  gap-3 md:gap-5'>
                            <Link href="/create-prompt" className='black_btn'>
                                Create Post
                            </Link>
                        </div>
                    
                ) : (
                    <>

                    </>
                )}
            </div>

        </nav>
  )
}

export default Nav