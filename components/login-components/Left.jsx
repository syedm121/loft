import React from 'react'
import LoftLogo from '../shared/Logo'
import GoogleButton from '../shared/GoogleButton'

const Left = () => {
  return (
    <div className='bg-rail flex-1 h-screen p-8 flex flex-col justify-between'>
      <div className='flex flex-col gap-8'>

              <div className="flex items-center gap-2">
                    <LoftLogo size={40} />
                    <span className="text-base font-medium text-ink-primary tracking-tight">
                      Loft
                    </span>
              </div>

              <div className='flex flex-col gap-2' >
                  <h1 className='text-3xl'>Where your <br/>
                    team thinks.</h1>
                    <p className='text-xs text-ink-muted'>
                      Channels, voice, threads. <br/>
                      All in one quiet space.
                    </p>
              </div>

      </div>
     

        <div>
             <GoogleButton/>
        </div>
    </div>
  )
}

export default Left