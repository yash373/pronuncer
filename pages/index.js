import React, { useState } from 'react'
import Title from '@/components/Title'
import { useSpeechSynthesis } from 'react-speech-kit'
import Button from '@/components/Button'

const Index = () => {
  const { speak } = useSpeechSynthesis()
  const [text,setText] = useState("")

  const say = (text) => {
    speak({ text })
  }

  const updateText = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='flex h-[100vh] flex-col w-full'>
      <Title text={"word pronouncer"} />
      <img className='h-[30vh] w-[19%] my-auto mx-auto' src={"https://th.bing.com/th/id/OIP.aXaQwWXMQPa8e2VCSfyYTwHaJ0?w=115&h=180&c=7&r=0&o=5&pid=1.7"} />
      <input onChange={updateText} value={text} placeholder='Enter your text here'  className='text-center w-[50%] mx-auto my-auto rounded-md h-[10vh] p-5 bg-slate-100' />
      <div className='mx-auto my-auto flex flex-col w-[90vh] gap-4'>
        <Button text={"Speak in Russian"} />
        <Button text={"Speak in English"} />
      </div>
    </div>
  )
}

export default Index
