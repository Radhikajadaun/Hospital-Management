import React from 'react'

const top = ({heading, para, source1, source2}) => {
  return (
    <div className="relative w-full h-150 flex flex-col items-center">
      {/* Background image with low opacity */}
      <img 
        className="absolute w-full h-125 object-cover opacity-30 z-0" 
        src={source1} 
        alt="Background" 
      />
      
      
      <div className="container relative z-10 flex justify-around items-center mt-10">
        {/* Left section with text and link */}
        <div className="flex flex-col space-y-5 ml-25">
          <h1 className="font-bold text-5xl w-[60%]">{heading}</h1>
          <p className="w-150 text-justify">{para}</p>
          
        </div>
        

        <div>
          <img className="w-120" src={source2} alt="Content" />
        </div>
      </div>
    </div>
  )
}

export default top
