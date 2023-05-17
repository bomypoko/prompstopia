// Layout File is an Important File Structure. the component will be use in side the Layout which call Children Components.

import '@styles/globals.css';


//  Start Header 
export const metadata = {
    title : 'Promtopia',
    description: 'Discover & Share Ai Prompts'
}
// End Header 

const Rootlayout = ({children}) => {
  return (

    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className="app">   
                {children}   
            </main>
        </body>
    </html>
  )
}

export default Rootlayout;