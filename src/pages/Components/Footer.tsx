import { Facebook , Twitter , Linkedin , Youtube } from 'lucide-react'
import React from 'react'



export default function Footer() {
  return (
    <div className="bg-teal-600 h-100 ">
        <h1 className=" pt-10  font-autograph text-4xl mb-5 text-center ">Muhammad Adil</h1>
      <div>
        <ol className="flex mb-5 justify-center gap-8 text-center text-white font-semibold ">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ol>
      </div>

      <div className="flex mt=20 justify-center  gap-10 pb-10">
      <Facebook size={30}/>
      <Linkedin size={30}/>
      <Twitter size={30}/>
      < Youtube size={30}/>
      
      </div>
    </div>
  )
}
