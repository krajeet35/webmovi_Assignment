let box= document.querySelector("#box");
let div1=document.querySelector("#result");
const key="8948f9a9586d4202760eb92cd08036ae";
let data=null;
function getData(){
    let city= document.querySelector("#input").value;
    
    if(city.length>2){
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

        fetch(url).then(function(res){
           return res.json();
           
        }).then(function(res){
            data=res;
            result(data);
        })
    }
    else{
        div1.innerText="Please enter a city name";
    }

}

function result(data){
    div1.innerHTML=null;
    if(data==null){
        div1.innerText="City not found";

    }
    else{
        
    let h1=document.createElement("h1");
    h1.innerText=data.name;
    let h2= document.createElement("h2");
    h2.innerText=`Temperature: ${data.main.temp}°C`;

    let min= document.createElement("p");
    min.innerText=`Lowest Temperarture: ${data.main.temp_min}°C`;
    let max= document.createElement("p");
    max.innerText=`Highest Temperarture: ${data.main.temp_max}°C`;


    div1.append(h1,h2,min,max);

    box.append(div1);
    }

}
