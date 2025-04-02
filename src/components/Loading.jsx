import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className="animate-spin border-4 border-t-transparent w-[3.4vw] h-[3.4vw] rounded-full border-gray-400"></div>
    </div>
  )
}

export default Loading