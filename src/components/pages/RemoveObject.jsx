import React from 'react'

const RemoveObject = () => {
   const [input, setInput] = useState("");
      
        const onSubmitHandler=async (e)=>{
          e.preventDefault()
      
        }


  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* left-col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>
  );
}

export default RemoveObject
