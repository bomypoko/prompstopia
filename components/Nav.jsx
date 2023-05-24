'use client'

import Link from 'next/link' // allow us to navigate to the other page
import Image from 'next/image' // optimize images when loading 
import { useState , useEffect } from 'react' // render from Client side ( Use client)
import { signIn , signOut , useSession , getProviders } from 'next-auth/react' // for user to  login and logout 

const Nav = () => {

    // const isUserLoggedIn = true
    // rename data to session 
    const { data: session } = useSession()

    

    const [providers , setProviders] = useState(null) // This user not login yet = Empty 
    const [toggleDropdown , setToggleDropdown] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders(); // getProviders from Next.Js 13
            setProviders(response) // then keep result in state
        }
        setUpProviders() // <-- Call here

        
    }, [])

    return (

        <nav className='w-full flex-between mb-16 pt-3'>

            <Link href="/" className='flex gap-2 flex-center'> 
                <Image 
                    src="/assets/images/logo.svg" 
                    width={30} height={30}
                    alt="Promptopia Logo"
                    className='object-contain'/> 
                <p className='logo_text'>Promptopia</p>
            </Link>

            {/* {alert(providers)} */}

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {/* User Login = True   // replace data to session */}
                {session?.user ? (
                        <div className='flex gap-3 md:gap-5'>
                            <Link href="/create-prompt" 
                                  className='black_btn'
                                  > Create Post
                            </Link>
                            <button 
                                type='button' 
                                onClick={signOut} 
                                className='outline_btn'
                                > Sign Out 
                            </button>
                            <Link href='/profile'>
                                <Image 
                                    src={session?.user.image} // Will be user Image Profile 
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
            
            <div className='sm:hidden flex relative'>
                {/* If User Already Logging In - Render this div  */}
               
                {/* after replace data to session  */
                    // { isUserLoggedIn? }
                }

                {session?.user ? (
                    <div className='flex'>
                        <Image
                            src={session?.user?.image}
                            width={30}
                            height={30}
                            alt='Profile Image'
                            className='rounded-full'
                            onClick={() => {setToggleDropdown((prev) => !prev)}}
                            />

                        {toggleDropdown && (
                            <div className='dropdown'>
                              <Link
                                href="/profile"
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                                >
                                 My Profile
                              </Link>
                              <Link
                                href="/create-prompt"
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                                >
                                 Create Prompt
                              </Link>
                              <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false)
                                    signOut()
                                }}
                                className='mt-5 w-full black_btn'
                                >
                                Sign Out
                              </button>
                            </div>
                        )}
                    </div>
                    
                  
                // If User not login yet - there is a sign-in to btn lead user to the login page
                ) : (
                    <>
                    {providers &&
                      Object.values(providers).map((provider) => (
                        <button
                          type='button'
                          key={provider.name}
                          onClick={() => {
                            signIn(provider.id);
                          }}
                          className='black_btn'
                        >
                          Sign in
                        </button>
                      ))}
                  </>
                )}
            </div>
          

        </nav>
  )
}
export default Nav
