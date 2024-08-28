import React, { useState , useEffect } from 'react'

export default function Password_generator() {

    // let pass="abcdefg";

    let [pass,setPass] = useState(" ");
    let [length,setLength] = useState(8);
    let [numAllowed,setnumAllowed] = useState(false) 
    let [symAllowed,setsymAllowed] = useState(false)

    let generate = () => {
      let pass="";
      // let stri="!@#$%^&*()_+-=[]{}|";
      if(symAllowed) str+="@#$%^&*()_+-=[]{}|";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(numAllowed) str+="1123456789";

      for (let i = 0; i < length; i++) {
        let RN=Math.floor(Math.random()*str.length);
        pass+=str.charAt(RN);
      }

        // console.log("abc");
        console.log(Math.floor(Math.random()*str.length));
        // pass=Math.floor(Math.random()*10);
        setPass(pass);
    }

    useEffect(generate,[numAllowed, symAllowed,length]);

  return (
    <div>
      {/* //Heading */}
      <div className="flex flex-col align-middle h-96 w-96 text-slate-100 relative top-36">
          <div className="text-center mb-4 text-2xl">Password Generator</div>

    {/* firstbox */}
          <div className="flex flex-row space-x-28 bg-gray-700 h-10  justify-center align-middle">
              <div className="pl-6 w-96 text-2xl grow self-center text-gray-500">{pass}</div>
              <span className="pr-6 relative p-0 m-0 self-center">Copy</span>
          </div>

    {/* secondbox */}
          <div className="pt-2  mt-2  flex flex-col  bg-gray-700 h-full ">
              <div className="flex flex-row gap-24">

            {/* Character_length */}
                  <div className='pl-6' >Character Length</div>
                  <span>{length}</span>
              </div>

            {/* Slider */}
              <input className="mx-4 my-5" type="range" min="0" max="14" value={length} onChange={(e)=>{setLength(e.target.value)}} name="" id="" />

            {/* letters */}
              <div className='flex flex-row align-middle justify-start gap-5'>
                  <input className="ml-10  bg-black " type="checkbox" name="" id="" />
                  <p>Include Uppercase Letters</p>
              </div>

            {/* lower case  */}
              <div className='flex flex-row align-middle justify-start gap-5'>
                  <input className="ml-10  bg-black " type="checkbox" name="" id="" />
                  <p>Include Lowercase Letters</p>
              </div>

            {/* include numbers */}
              <div className='flex flex-row align-middle justify-start gap-5'>
                  <input className="ml-10  bg-black " defaultChecked={false} onChange={()=>(setnumAllowed((prev)=>(!prev)))}  type="checkbox" name="" id="" />
                  <p>Include Numbers</p>
              </div>

            {/* include Symbols */}
              <div className='flex flex-row align-middle justify-start gap-5'>
                  <input className="ml-10  bg-black " defaultChecked={false} onChange={()=>(setsymAllowed((prev)=>(!prev)))} type="checkbox" name="" id="" />
                  <p>Include Symbols</p>
              </div>

            {/* BUTTON */}
              <button
                  onClick={generate}
                  className="mt-5 self-center text-center text-3xl bg-orange-800 w-56 h-14 border-y-teal-300 rounded-sm">Generate</button>
          </div>
      </div>
    </div>
  )
}

