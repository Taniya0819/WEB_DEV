import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

let CardList=() =>{
    let [cards, setcards] = useState([]);

    useEffect(()=>{
        fetch("/data.json")
        .then((response)=>response.json())
        // .then((data)=>console.log(data))
        .then((data)=> setcards(data))
    },[])

    return (
        <div className="card_list">
            {
                cards.map((ele) => (
                    <div className="card">
                        <h1>Product Name : {ele.Product_Name} </h1>
                        <h1>Price : {ele.Price} </h1>
                        <h1>Discount : {ele.Discount} </h1>
                        <h1>Description : {ele.Description} </h1>

                        </div>
                )
                )
            }
        </div>
      )
}

export default CardList