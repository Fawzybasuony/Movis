import React from "react"
import Hedar from '../componant/Hedar'
import Slidar from "../componant/Slidar"
export default function Moveis() { 

  return (
    <>
             <Hedar/>
             <h1 className="text-light ms-3">The most popular movies</h1>
            <hr className="w-25 ms-5"/>
          <Slidar/>

    </>
  )
}
