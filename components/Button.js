import React from 'react'

const Button = ({text, action}) => {
  return (
    <button className='bg-blue-500 mx-auto my-auto p-2 rounded-md w-1/2' onClick={()=>{action()}}>
      {text}
    </button>
  )
}

export default Button
