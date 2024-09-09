import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")
const [rgb,setRgb] = useState("")
  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <h1 className='text-center font-bold text-4xl pt-4'>{rgb}</h1>
   <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
    <div className="flex flex-wrap justify-center gap-2 py-2 px-3 shadow-lg rounded-3xl bg-white">
      <button onClick={()=>setColor("red")} className='bg-red-600 rounded-full shadow-lg px-4 py-1 outline-none'>Red</button>
      <button onClick={()=>setColor("green")} className='bg-green-700 rounded-full shadow-lg px-4 py-1 outline-none'>green</button>
      <button onClick={()=>setColor("yellow")} className='bg-yellow-500 rounded-full shadow-lg px-4 py-1 outline-none'>yellow</button>
      <button onClick={()=>setColor("blue")} className='bg-blue-700 rounded-full shadow-lg px-4 py-1 outline-none'>blue</button>
      <button onClick={()=>setColor("purple")} className='bg-purple-500 rounded-full shadow-lg px-4 py-1 outline-none'>Purple</button>
      <button onClick={()=>setColor("black")} className='bg-black rounded-full shadow-lg px-4 py-1 text-white outline-none'>black</button>
      <button onClick={()=>{
        let red = Math.floor(Math.random() * 255 +1);
        let green = Math.floor(Math.random() * 255 +1);
        let blue = Math.floor(Math.random() * 255 +1);
        setColor(`rgb(${red},${green},${blue})`)
        setRgb(`rgb(${red},${green},${blue})`)
      }} className='bg-black rounded-full shadow-lg px-4 py-1 text-white outline-none'>Get Random</button>

    </div>
   </div>

    </div>
  
    </>
  )
}

export default App
