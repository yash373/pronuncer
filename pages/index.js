import React, { useState } from 'react'
import Title from '@/components/Title'
import { useSpeechSynthesis } from 'react-speech-kit'
import Button from '@/components/Button'
import transliterate from "transliterate"

const Index = () => {
  const { speak } = useSpeechSynthesis()
  const [text, setText] = useState("")

  const say = (text) => {
    speak({ text })
  }

  const updateText = (e) => {
    setText(e.target.value)
  }

  const getRussianText = async () => {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '2010442decmshc62de9e7247e8e1p15b96cjsn1cf015d3184b',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        q: text,
        target: 'ru',
        source: 'en'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result["data"]["translations"][0]["translatedText"]
    } catch (error) {
      console.error(error);
    }
  }

  function transliterateRussian(text) {
    return transliterate(text, { lang: 'ru' });
  }

  const speakRussian = async () => {
    const russianText = await getRussianText()
    const readable = transliterateRussian(russianText)
    say(readable)
  }

  return (
    <div className='flex h-[100vh] flex-col w-full'>
      <Title text={"word pronouncer"} />
      <img className='h-[30vh] w-[19%] my-auto mx-auto' src={"https://th.bing.com/th/id/OIP.aXaQwWXMQPa8e2VCSfyYTwHaJ0?w=115&h=180&c=7&r=0&o=5&pid=1.7"} />
      <input onChange={updateText} value={text} placeholder='Enter your text here' className='text-center w-[50%] mx-auto my-auto rounded-md h-[10vh] p-5 bg-slate-100' />
      <div className='mx-auto my-auto flex flex-col h-[10vh] gap-4'>
        <Button text={"Speak in Russian"} action={() => { speakRussian() }} />
        <Button text={"Speak in English"} action={() => { say(text) }} />
      </div>
    </div>
  )
}

export default Index
