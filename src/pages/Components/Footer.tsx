import React from 'react'
import {FaFacebook} from 'react-icons/Fa';
import {AiFillLinkedin} from 'react-icons/Ai';
import {SiMessenger} from 'react-icons/Si';
import {IoLogoYoutube} from 'react-icons/Io';



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
      <FaFacebook size={30}/>
      <AiFillLinkedin size={30}/>
      <SiMessenger size={30}/>
      <IoLogoYoutube size={30} />

      </div>
    </div>
  )
}
