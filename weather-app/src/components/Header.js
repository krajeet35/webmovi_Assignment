import React, { useEffect, useState } from 'react'

export const Header = () => {
    const[city,setCity]= useState("patna");
    const[data, setData] = useState(null);

    useEffect(()=>{
        function getData(){
            console.log("Hello");
            const key="8948f9a9586d4202760eb92cd08036ae";
            // let city= document.querySelector("#input").value;
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        
            fetch(url).then(function(res){
               return res.json();
               
            }).then(function(res){
                console.log(res);
                setData(res);
            })
        
        }
        // getData();
    })



  return (
    <div className='container'>
        <nav className="navbar navbar-light bg-light">
   <form className="form-inline">
     <input id="input" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
     <button onChange={(event) =>{}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
   </form>
 </nav>
     <div className='result '>
             <h2>{setData.name}</h2>


     </div>

     </div>
  );
}


