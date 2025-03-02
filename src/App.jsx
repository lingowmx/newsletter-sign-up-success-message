import './App.css'
import { useState } from 'react'
import { ImageIllus } from './components/ImageIlus'
import { Updated } from './components/Updated'
import { Subscribe } from './components/Subscribe'
import { Success } from './components/Success'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  return (
    <div className='font-roboto h-screen flex justify-center items-center'>
      <main className='bg-white flex flex-col lg:flex-row-reverse'>
        {!isSubscribed ? (
          <>
          <div>
            <ImageIllus />
          </div>
          <div className='lg:h-[593px] lg:w-[440px]'>
            <Updated />
            <Subscribe 
            setIsSubscribed={setIsSubscribed}
            errorEmail={errorEmail}
            setErrorEmail={setErrorEmail} />
          </div>
          </>
        ) : (
          <Success setIsSubscribed={setIsSubscribed} />
        )}
      </main>
    </div>
  )
}

export default App
