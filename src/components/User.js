import { useState,useEffect } from "react";

const User = ()=>{

    useEffect(() => {
        // * API call
        // async function getUserInfo() {
          // }
          const timer = setInterval(() => {
            console.log('setInterval called');
          }, 1000);
          console.log('use effect  function')
        return()=>{
            clearInterval(timer )
          console.log('use effect return function')
        }
      }, []);
    console.log('user render fx')

    return (
        <div className="user-card">
            <h1>from Fx component</h1>
            <h2>Name: Harsh vardhan</h2>
            <h3>Location: Bikaner</h3>
            <h5> state </h5>
        </div>
    )
}
export default User;