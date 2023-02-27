import React, {useEffect,useState}from "react";

const Counter=()=>{
    const [number,setNumber]=useState(0)
    const [text,setText]=useState('hello')

    useEffect(()=>{
        console.log('Entered UseEffect')
    },[number])

    return(
        <div>
            API CALL
            <button onClick={()=>setNumber(10)}>Update Number</button>
        </div>
    )
}

export default Counter