// import React from 'react'

// const Button = () => {
//     const handleClick4=(e)=>{
//        e.target.textContent="ouch"
//     }
//     let count=0
//     const handleClick3=(name) =>{
//       if(count<3){
//         count++
//         console.log(`${name} you clicked me ${count} times`)
//       }
//       else{
//         console.log(` Hey ${name} stop clicking me`)
//       }
//     }
//     const handleClick=() => {
//         console.log('out')
//     }
//     const handleClick2=(name)=>{
//         console.log(`${name} stop clicking me `)
//     }
//   return (
//      <>
//      <button onClick={handleClick}>click me</button>
//      <button onClick={()=>handleClick2("brocode")}>click</button>
//      <button onClick={()=>handleClick3("afsah")}>count</button>
//      <button onDoubleClick={(e)=>handleClick4(e)}>click cheyyu</button>
//      </>
//   )
// }

// export default Button
import React from 'react'
import Any from './Any'

const Button = () => {
  return (
    <>
    <Any/>
    </>
  )
}

export default Button