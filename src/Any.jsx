// import React from 'react'
// import { useState } from 'react'
// const Any = () => {
//     const [count,setCount] =useState(0)

//     const increment=()=>{
//         setCount(prevCount=>prevCount+1)
//         setCount(prevCount=>prevCount+1)
//     }
//     const decrement=()=>{
//         setCount(c=>c-1)
//         setCount(c=>c-1)
//     }
//   return (
//     <>
//     <button onClick={increment}>increment</button>
  
//     <button onClick={decrement}>Decrement</button>
//     <h3> hi this is count: {count}</h3>
//     </>
//   )
// }

// export default Any

// import React,{useState} from 'react'

// const Any = () => {
//     const [name,setName]=useState("guest")
//     const [quantity,setQuantity]=useState()
//     function nameChange(event){
//        setName(event.target.value) 
//     }
//     function quantityChange(event){
//         setQuantity(event.target.value)
//     }
//   return (
//     <>
//     <input value={name} type="text" onChange={nameChange} />
//     <h3>{name}</h3>
//     <input value={quantity} type='number' onChange={quantityChange} />
//     <p>{quantity}</p>
//     </>
//   )
// }

// export default Any


// import React,{useState} from 'react'

// const Any = () => {
//     const [color,setColor]=useState("#FFFFF")

//     function colorChange(event){
//         setColor(event.target.value)
//     }
//   return (
//   <div className="colorpicker-container">
//     <h1>color picker</h1>
//     <div className="colordisplay" style={{backgroundColor:color}}>
//         <p>select a color: {color}</p>

//     </div>
//     <label>select a color:</label>
//     <input type="color"  value={color} onChange={colorChange}/>
//   </div>
//   )
// }

// export default Any





// import { useState } from "react"
// import React from 'react'

// const Any = () => {
//   const [car,setCar]=useState({year:2024,make:"ford",model:"mustang"})
//   function yearChange(event){
//     setCar(c=>({...c,year:event.target.value}))
//   }
//   function makeChange(event){
//      setCar(c=>({...c,make:event.target.value}))
//   }
//   function modelChange(event){
//     setCar(c=>({...c,model:event.target.value}))  
//   }
//   return (
//     <div>

//       <p>your favorite car is {car.year} {car.make} {car.model} </p>
//       <input type="number" value={car.year} onChange={yearChange}/><br />
//       <input type="text" value={car.make} onChange={makeChange } /><br />
//       <input type="text" value={car.model} onChange={modelChange}/><br />
//     </div>
//   )
// }

// export default Any



// import React, { useState } from 'react'

// const Any = () => {
//   const [foods,setFoods]=useState(["Apple","orange","bananna"])
//   function addFood(){
//     const newFood=document.getElementById("foodInput").value
//     document.getElementById("foodInput").value=""

//     setFoods(f =>[...f,newFood])
//   }
//   function removeFood(index){
//     setFoods(foods.filter((_,i)=> i!=index))  
//   }
//   return (
//     <div>
//         <h2>List of Food</h2>
//         <ul>
//           {foods.map((food,index)=> <li key={index} onClick={()=>removeFood(index)}>{food}</li>)}
//         </ul>
//       <input type="text" placeholder='enter name of food' id='foodInput' />
//       <button onClick={addFood}>Addfood</button>

//     </div>
//   )
// }

// export default Any

// import React from 'react'
// import { useState } from 'react'

// const Any = () => {
//   const [car,setCar]=useState([])
//   const [carYear,setCarYear]=useState(new Date().getFullYear())
//   const [carMake,setCarMake]=useState("")
//   const [carModel,setCarModel]=useState("")

//   function addCar(){
//      const newCar={year:carYear,
//                    make:carMake,
//                    model:carModel
//      }
//      setCar(c=>[...c,newCar])
//      setCarYear(new Date().getFullYear())
//      setCarMake("")
//      setCarModel("")
//   }
//   function removeCar(index){
//      setCar(c=>c.filter((_,i)=>i!==index))
//   }

//   function changeYear(event){
//     setCarYear(event.target.value)
//   }

//   function changeMake(event){
//     setCarMake(event.target.value)
//   }

//   function changeModel(event){
//    setCarModel(event.target.value)
//   }
//   return (
//     <div>

//       <h2>List of cars</h2>
//       <ul>
//       {car.map((ca,index)=>
//         <li key={index} onClick={()=>removeCar(index)}>
//           {ca.year}  {ca.make} {ca.model}
//           </li>
//       )}
//       </ul>
//       <input type="number" value={carYear} onChange={changeYear}/><br />
//       <input type="text" value={carMake} onChange={changeMake} placeholder='enter car make'/><br />
//       <input type="text" value={carModel} onChange={changeModel}  placeholder='enter car model'/><br />
//       <button onClick={addCar}>Add Car</button>
//     </div>
//   )
// }

// export default Any



// import React, { useEffect, useState } from 'react'

// const Any = () => {
// const [count,setCount]=useState(0)
// const [color,setColor]=useState("green")
// useEffect(()=>{
//   document.title=`count:${count} ${color}`
// },[count,color])
// function addCount(){
//   setCount(c=>c+1)
// }
// function subCount(){
//   setCount(c=>c-1)
// }
// function changeColor(){
//   setColor(c=>c==="green"?"red":"green")
// }
//   return (
//     <div>
//       <p style={{color:color}}>count: {count}</p>
//       <button onClick={addCount}>Add</button>
//       <button onClick={subCount}>Sub</button><br />
//       <button onClick={changeColor}>change color</button>

//     </div>
//   )
// }

// export default Any



// import React,{useState,useEffect} from "react";

// const Any = () => {
//   const [width,setWidth]=useState(window.innerWidth)
//   const [height,setHeight]=useState(window.innerHeight)
  
//   useEffect(()=>{
//     window.addEventListener("resize",handleResize)
//     console.log("event listener added")

//     return()=>{
//       window.removeEventListener("resize",handleResize)
//       console.log("event listener removed")
//     }
//   },[width,height])

//   useEffect(()=>{
//      document.title=`Size: ${width} x ${height}`
//   })
//   function handleResize(){
//     setWidth(window.innerWidth)
//     setHeight(window.innerHeight)
//   }

//   return (
//     <div>
//       <p>window width: {width}px</p>
//       <p>window Height: {height}px</p>
//     </div>
//   )
// }

// export default Any





import React,{useEffect,useState} from 'react'

const Any = () => {

  const [time,setTime]=useState(new Date())
  useEffect(() => {
      const intervalId=setInterval(()=>{
           setTime(new Date())
      },1000)

      return ()=>{
        clearInterval(intervalId)
      }
  },[])

  function formatTime(){
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()
    const meridiem = hours >= 12 ? "PM" :  "AM"

    hours = hours % 12 || 12
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
  }
  function padZero(number){
    return (number<10 ? "0" : "") + number
   }
  return (
    <div className='clock-container'>
       <div className="clock">
       <span className='clock'>{formatTime()}</span>
      
       </div>
    </div>
  )
}

export default Any