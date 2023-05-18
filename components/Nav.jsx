'use client'

import Link from 'next/link' // allow us to navigate to the other page
import Image from 'next/image' // optimize images when loading 
import { useState , useEffect } from 'react' // render from Client side ( Use client)
import { signIn , signOut , useSession , getProviders } from 'next-auth/react' // for user to  login and logout 
const Nav = () => {

    const isUserLoggedIn = false
    const [providers , setProviders] = useState(null) // This user not login yet = Empty 

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders(); // getProviders from Next.Js 13
            setProviders(response) // then keep result in state
        }
        setProviders() // <-- Call here
    }, [])
    return (

        <nav className='w-full flex-between mb-16 pt-3 '>


            <Link href="/" className='flex gap-2 flex-center'> 
                <Image 
                    src="/assets/images/logo.svg" 
                    width={30} height={300}
                    alt="Promptopia Logo"
                    className='object-contain'/> 
                <p className='logo_text'>Promptopia</p>
            </Link>


            {/* Desktop Navigation */}
        
            <div className='sm:flex hidden'>
                {/* User Login = True   */}
                {isUserLoggedIn ? (
                        <div className='flex gap-3 md:gap-5'>
                            <Link href="/create-prompt" className='black_btn'>
                                Create Post
                            </Link>
                            <button 
                                type='button' 
                                onClick={signOut} 
                                className='outline_btn'> Sign Out </button>
                            <Link href='/profile'>
                                <Image 
                                    src='/assets/images/logo.svg'
                                    width={30} height={30}
                                    alt='profile'
                                    className='rounded-full'/>
                            </Link>
                        </div>
                         ) : (

                // User Login = False / We use getProvider (User)
                        <>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button 
                                        type='button'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        className='black_btn'
                                        >
                                            Sign In
                                    </button>
                                ))}
                        </>
                )}
            </div>
            {/* End Desktop Navigation */}

            {/* Mobile Navigation */}
          

        </nav>
  )
}

export default Nav