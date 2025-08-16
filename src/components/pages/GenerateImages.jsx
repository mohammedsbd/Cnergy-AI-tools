import React from 'react'

const GenerateImages = () => {
    const blogCategories = [
      'General ', 'Technology' ,'Business', "Health", "LifeStyle", "Education" ,"Travel", "Food"
      ];
    
      const [selectedCategory, setSelectedCategory] = useState("General");
      const [input, setInput] = useState("");
    
      const onSubmitHandler=async (e)=>{
        e.preventDefault()
    
      }
  return (
    <div>
      <h1>Gnerateimages</h1>
    </div>
  )
}

export default GenerateImages
