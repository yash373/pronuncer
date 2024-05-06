import React from 'react'
import Title from '@/components/Title'
import { useSpeechSynthesis } from 'react-speech-kit'

const Index = () => {
  const { speak } = useSpeechSynthesis()

  const say = (text) => {
    speak({ text })
  }

  return (
    <div className='flex h-[100vh] flex-col w-full'>
      <Title text={"word pronouncer"} />
      <img className='h-[30vh] w-[19%] my-auto mx-auto' src={"https://th.bing.com/th/id/OIP.aXaQwWXMQPa8e2VCSfyYTwHaJ0?w=115&h=180&c=7&r=0&o=5&pid=1.7"} />
    </div>
  )
}

export default Index
