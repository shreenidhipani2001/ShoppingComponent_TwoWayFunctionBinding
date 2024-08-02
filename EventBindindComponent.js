import { useState,useEffect } from "react";

export default function EventBindingComponent(){
    const [userName,setUserName]=useState("John");
    function handleUserName(e){
        //this is suscriber...
        //tells what to perform
        //here collet the value from text box
        //how?
        //to collect the value from text box we need an event arguement
        console.log(e.target.value);
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onChange={handleUserName}></input></dd>
            </dl>
            <h3>Hello {userName}</h3>
        </div>
    )
}