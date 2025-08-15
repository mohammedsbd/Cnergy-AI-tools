import React from 'react'

const Creationitem = ({item}) => {
  return (
    <div className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
      <div className='flex justify-between items-center gap-4'>
<div>
<h2>{item.prompt}</h2>
<p className='text-gray-500'>{item.type}-{new Date(item.createdAt).toLocaleDateString()}</p>
</div>
<button></button>
      </div>
    </div>
  )
}

export default Creationitem
