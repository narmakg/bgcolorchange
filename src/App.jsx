import { useState } from 'react'

function App() {
  const urlh = "https://api.unsplash.com/photos/random?count=1";
const accessKey = "PclLFT0r583QS9jbwz2c-qZxufKHEFJ---cG3kRY0g0";
async function setBackgroundImage() {
  try {
    const config = {
      headers: { Authorization: `Client-ID ${accessKey}` },
    };
    const res = await fetch(urlh, config);
    const data = await res.json();
    let currentImageUrl = data[0].urls.full; // Store the current image URL
    console.log(currentImageUrl);
    setImg(currentImageUrl)
  } catch (error) {
    console.error("Error fetching image:", error);
    // Optional: Display a user-friendly message in the UI
  }
}
  const [color,setColor] = useState("olive")
const [rgb,setRgb] = useState("")
const [img,setImg]= useState("color")
const [text,setText] = useState("")
  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color,backgroundImage:`url(${img})`,backgroundSize: "cover",backgroundRepeat:"no-repeat",height:"100vh"}}>
      <h1 className='text-center font-bold text-4xl pt-4'>{rgb}</h1>
   <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
    <div className="flex flex-wrap justify-center gap-2 py-2 px-3 shadow-lg rounded-3xl bg-white">
      <button onClick={()=>{setColor("red") 
        setImg("")}} className='bg-red-600 rounded-full shadow-lg px-4 py-1 outline-none'>Red</button>
      <button onClick={()=>{setColor("green") 
        setImg("")}} className='bg-green-700 rounded-full shadow-lg px-4 py-1 outline-none'>green</button>
      <button onClick={()=>{setColor("yellow") 
        setImg("")}} className='bg-yellow-500 rounded-full shadow-lg px-4 py-1 outline-none'>yellow</button>
      <button onClick={()=>{setColor("blue") 
        setImg("")}} className='bg-blue-700 rounded-full shadow-lg px-4 py-1 outline-none'>blue</button>
      <button onClick={()=>{setColor("purple") 
        setImg("")}} className='bg-purple-500 rounded-full shadow-lg px-4 py-1 outline-none'>Purple</button>
      <button style={{backgroundColor:color,color:text}} onClick={()=>{color == "black" ? setColor("white") : setColor("black")
      text === "white" ? setText("black") : setText("white") 
        setImg("")}} className=' rounded-full shadow-lg px-4 py-1 text-white outline-none'>Toggle</button>
      <button onClick={()=>{
        let red = Math.floor(Math.random() * 255 +1);
        let green = Math.floor(Math.random() * 255 +1);
        let blue = Math.floor(Math.random() * 255 +1);
        setColor(`rgb(${red},${green},${blue})`)
        setImg("")
        setRgb(`rgb(${red},${green},${blue})`)
      }} className='bg-black rounded-full shadow-lg px-4 py-1 text-white outline-none'>Get Random</button>
      <button onClick={setBackgroundImage} className='bg-yellow-500 rounded-full shadow-lg px-4 py-1 outline-none'>yellow</button>


    </div>
   </div>

    </div>
  
    </>
  )
}

export default App
