"use client"

import { useState } from "react"
import Link from "next/link"

export default function Card({vid,name}:{vid:string,name:string}){

  const [rating,setRating] = useState(0)

  return(

    <Link href={`/venue/${vid}`}>

      <div className="bg-white shadow-lg rounded-lg p-4 w-[250px]">

        <img src="/img/venue.jpg"/>

        <h2>{name}</h2>

        <div className="flex gap-1">

          {[1,2,3].map((star)=>(
            <span
              key={star}
              className={`cursor-pointer ${star<=rating ? "text-yellow-400":"text-gray-300"}`}
              onClick={(e)=>{
                e.stopPropagation()
                e.preventDefault()
                setRating(star)
              }}
            >
              ★
            </span>
          ))}

        </div>

      </div>

    </Link>
  )
}