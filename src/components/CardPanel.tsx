"use client"

import Card from "./Card"

export default function CardPanel(){
  return(

    <div className="grid grid-cols-3 gap-8 mt-6 justify-items-center">

      <Card vid="001" name="Bloom Garden"/>
      <Card vid="002" name="Spark Space"/>
      <Card vid="003" name="Grand Hall"/>
      

    </div>
    

  )
}