import React from 'react'
import Vardhman from '/Vardhman.jpeg'

export function CardOne(props) {
      console.log(props.username);

  return (
    <div className="
     transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
    <div className="w-[300px] rounded-md ">
      <img
        src={Vardhman}
        alt="Error"
        className="h-[300px] w-full rounded-md object-cover "
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold">VARDHMAN</h1>
        <p className="mt-3 text-lg text-600-bold">
        I am a Developer.
        </p>
      </div>
    </div>
    </div>

  )
}