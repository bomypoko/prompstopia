'use client'

import { SessionProvider } from "next-auth/react"

// Higher and Order Function wrap the components 
const Provider = ({ children , session }) => {
  return (
    
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
  )
}

export default Provider