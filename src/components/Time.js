import React, {useState,useEffect} from 'react'

export default function Time() {

    const [time,setTime]=useState(new Date().toLocaleString());

    useEffect(()=>{
setInterval(()=>{
setTime(new Date().toLocaleString());
},1000);
})

  return (
    <div className="clockDiv">
      <h2 className="clock">{time}</h2>
    </div>
  )
}
