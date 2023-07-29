import Image from 'next/image'
import {  Check } from 'lucide-react';




export default function Home() {
  return (
    <div className="bg-[url('/pattern-01.jpg')] bg-no-repeat bg-cover mt-15 mx-auto ">
    <div className=" text-center pt-6 py-10  ">
      <h3 className="text-white  md:pr-20 font-semibold pt-10">Hello I m </h3>
      <h1 className="text-white  md:pr-20 font-bold text-4xl">Adil</h1>
      <h3 className="text-white  md:pr-20 font-semibold">Full Stack Developer</h3>

      <div className="flex text-center md:pr-20 justify-center mt-10 gap-8 "> 
      <button className=" outline outline-offset-2 outline-teal-500 rounded-lg text-lg p-2 font-medium text-teal-500">Download C.V</button>
       <button className=" rounded-lg   text-lg p-3 bg-teal-500">Lrts Talk</button>
      </div>
    </div>

    {/* image */}
    <div className=" mx-auto mt-7 items-center p-5 md:pl-[500px] md:pr-20">
    <Image src="/teal.png" alt="logo design" width={300} height={600} className="w-lg h-95  object-contain rounded-t-full "/>
    </div>
    {/* end */}
    

    {/* about */}
    
      <h3 className="text-teal-500  font-semibold pt-20 md:pr-20 text-center">Get to now</h3>
      <h2 className="text-teal-400 font-autograph text-6xl md:pr-20 text-center">About me</h2>

      {/* <div className=" pl-20 pr-20"> */}
      <div className=" md:pl-20">
      <div className="flex gap-1  md:flex-row flex-col pt-10  ">
        <Image src="/teal.png" alt='logos full'  width={500}  height={500} className="md:pl-40  p-8  "/>
        <div className="  md:pl-25 md:pr-10 md:w-1/2 ">
        
        <p className="pt-10 md:text-lg p-7  text-teal-500  ">I look forward to bringing my strong creative technical and analytical skills to Full-Stack Development with developing and delivering user-centric applications and solutions. Throughout my career I have been recognized as a professional who is focused on finding solutions and is capable of designing and developing cutting-edge applications using cutting-edge technologies.
        </p>

         <div className="pl-10 pt-5">
         <button className=" rounded-lg  p-3  text-lg  bg-teal-500">Let s Tallk</button>
         </div>

         </div>
    </div>

{/* experience */}
  <h3 className="text-teal-500  font-semibold pt-20 md:pr-20 text-center">whats skills Have</h3>
  <h2 className="text-teal-400 font-autograph text-5xl  md:pr-20 text-center">My Experience</h2>

  {/* left side */}
  <div className=" flex items-center max-w-full md:p-10 mx-auto " 
      id="experience">

      <div  className="text-gray-500 pr-40 p-10 mt-5 ">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-40 md:p-5 lg:pl-20 md:pl-5 ">

            {/* l-1 */}
            <span className="flex gap-10 border rounded-lg md:p-10 pb-5 bg-teal-500  ">
<div>
<p className="flex text-white font-medium pl-2 pt-5">< Check size={23}/>HTML</p>
<p className="flex text-white font-medium pl-2 pt-5"><Check size={23}/>CSS</p>
<p className="flex text-white font-medium  pl-2 pt-5"><Check size={23}/>Javascript</p>
<p className="flex text-white font-medium  pl-2 pt-5"><Check size={23}/>Tailwind</p>
</div>

<div>
<p className="flex text-white font-medium pr-15 pt-5"><Check size={23}/>Next.js</p>
<p className="flex text-white font-medium pl-15 pt-5"><Check size={23}/>Bootstrap</p>
<p className="flex text-white font-medium pl-15 pt-5"><Check size={23}/>React</p>
<p className="flex text-white font-medium pl-15  pt-5"><Check size={23}/>SQl</p>
</div>
</span>


{/* R2 */}



   
 <span className=" flex  border rounded-lg gap-10 md:p-10 bg-teal-500  pb-5">
  
 <div>
 <p className="flex text-white font-medium md:pl-4 pt-5"><Check size={23}/>MongoDB</p>
 <p className="flex text-white font-medium md:pl-4 pt-5"><Check size={23}/>Nodejs</p>
 <p className="flex text-white font-medium  md:pl-4 pt-5"><Check size={23}/>Express</p>
<p className="flex text-white font-medium  md:pl-4   pt-5"><Check size={23}/>Redux</p>
</div>

 <div>
 <p className="flex text-white font-medium md:pl-10 pt-5"><Check size={23}/>Bootstrap</p>
 <p className="flex text-white font-medium  md:pl-10 pt-5"><Check size={23}/>React</p>

 </div>
 </span>

 </div>
 </div>
 </div>

 



 
        

      
  
  {/* portfolio */}

  <h3 className="text-teal-500  font-semibold pt-5 md:pr-20 text-center">My Recent Work</h3>
  <h2 className="text-teal-400   font-autograph text-6xl  md:pr-20 text-center">Portfolio</h2>
 
  <div className=" flex items-center max-w-full mx-auto leading-8 mb-5  " id="portfolio">

      <div className="text-gray-500 px-10 mt-32 mx-auto">
       
       <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-24  md:pr-20"  >
          {/* card 1 */}

          <div className="shadow-md border-2 rounded-md shadow-gray-600  h-60 hover:scale-105 duration-75 ">
          <div>
              <Image
                src={"/qw.png"} alt='logo' width={300} height={300}
                className="w-60 h-40 border-b-2 rounded-t-md" / >
           </div>

           <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 2 */}
          <div className="shadow-md border-2 rounded-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <Image
                src={"/q2.png"} width={300} height={300}
                className="w-60 h-40 border-b-2 rounded-t-md " alt='logo'
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 3 */}
          <div className="shadow-md border-2 rounded-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <Image
                src={"/q1.png"} width={300} height={300}
                className="w-60 h-40 border-b-2 rounded-t-md" alt='logo'
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/Adilsheikh890" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 4 */}
          <div className="shadow-md border-2 rounded-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <Image
               src={"/q4.png"} width={300} height={300}
               className="w-60 h-40 border-b-2  rounded-t-md" alt='logo'
              />
           
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 5 */}
          <div className="shadow-md shadow-gray-600 border-2 rounded-md h-60 hover:scale-105 duration-75 ">
            <div>
              <Image
                src={"/q5.png"} width={300} height={300}
                className="w-60 h-40 border-b-2  rounded-t-md" alt='logo'
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
          {/* card 6 */}
          <div className="shadow-md border-2 rounded-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <Image
                src={"/q3.png"} width={300} height={300}
                className="w-60 h-40 border-b-2  rounded-t-md" alt='logo'
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>



  

  
  
  



  {/* end */}
  {/* contact */}
  <h3 className="text-teal-500  font-semibold pt-20  md:pr-20 text-center">Get In Touch</h3>
  <h2 className="text-teal-400 font-autograph text-6xl md:pr-20 text-center">Contact</h2>
  <form action="https://formspree.io/f/mbjeaqpn" method="POST" className=" md:p-5  text-center pt-5">
            <div>
              <input
                placeholder="Your Name"
                type="text"
                required
                name="name"
                className="p-2 md:w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
              />
            </div>
            <div className="my-5">
              <input
                required
                className="p-2 md:w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                placeholder="Your E-Mail"
                type="email"
                name="email"
              />
            </div>
            <div>
              <textarea
                rows={8}
                name="meraMessage"
                required
                className="p-2 md:w-80   bg-transparent border-2 rounded-md focus:outline-none text-white"
                placeholder="Your Message Here..."
              />
            </div>
           <div className="pb-5">
            <button
              type="submit"
              className="mx-auto block px-5   rounded-md  bg-gradient-to-b from-gray-300 text-black to-gray-600"
            >
              Submit
            </button>
            </div>
          </form>
          
  
  {/* end contact */}
</div>
</div>


  )
}

// next/core-web-vitals
