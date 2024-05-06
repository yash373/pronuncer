import React from 'react'
import Title from '@/components/Title'
import { useSpeechSynthesis } from 'react-speech-kit'

const Index = () => {
  const { speak } = useSpeechSynthesis()

  const say = (text) => {
    speak({ text })
  }

  return (
    <div className='flex h-[100vh] w-full'>
      <Title text={"word pronouncer"} />
    </div>
  )
}

export default Index
