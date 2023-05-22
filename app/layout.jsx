// Layout File is an Important File Structure. the component will be use inside the Layout which call Children Components.

import '@styles/globals.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider'

//  Start Header 
export const metadata = {
    title : 'Promtopia',
    description: 'Discover & Share Ai Prompts'
}
//  End Header 

const Rootlayout = ({ children }) => {
  return (

    <html lang="en">
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <main className="app">   
                     <Nav/>
                     {children}   
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout;