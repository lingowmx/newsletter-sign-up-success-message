import './App.css'
import { useState } from 'react'
import { ImageIllus } from './components/ImageIlus'
import { Updated } from './components/Updated'
import { Subscribe } from './components/Subscribe'
import { Success } from './components/Success'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  return (
    <div className='font-roboto h-screen flex justify-center items-center'>
      <main className='bg-white flex flex-col'>
        {/* {!isSubscribed && (
          <>
            <ImageIllus />
            <Updated />
          </>
        )}
        {isSubscribed ? <Success /> : <Subscribe setIsSubscribed={setIsSubscribed} />} */}
        {!isSubscribed ? (
          <>
            <ImageIllus />
            <Updated />
            <Subscribe setIsSubscribed={setIsSubscribed}/>
          </>
        ) : (
          <Success setIsSubscribed={setIsSubscribed}/>
        )}
      </main>
    </div>
  )
}

export default App
