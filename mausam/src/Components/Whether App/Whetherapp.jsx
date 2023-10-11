import {React , useState} from 'react'
import "./whetherapp.css"
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import humidity_icon from "../Assets/humidity.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"



const Whetherapp = () => {

    let api_key ="1d7df09f77ef6863f61ac3d58ed7ee60";

    const [wicon,setWicon] = useState(cloud_icon)
    const [humidity,setHumidity] = useState("");
    const [wind,setWind] = useState("");
    const [temperature,setTemperature] = useState("");
    const [location , setLocation] = useState("");
    const onChangelocation = (event) => {
        setLocation(event.target.value);
      };


    
    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(!element[0].value){
            return alert("No data mentioned");
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();
        // const humidity = document.getElementsByClassName("humidity-percent");
        // const wind = document.getElementsByClassName("wind-rate");
        // const temperature = document.getElementsByClassName("whether-temp");
        // const location = document.getElementsByClassName("whether-location");

        // humidity[0].innerHTML = data.main.humidity + "%";
        // wind[0].innerHtml = data.wind.speed + "km/h";
        // temperature[0].innerHtml = data.main.temperature + "°c";
        // location[0].innerHtml = data.name;

        if(data.whether[0].icon === "01d" || data.whether[0].icon === "01n")
        {
            setWicon(clear_icon);
        }
        else if(data.whether[0].icon === "02d" || data.whether[0].icon === "02n")
        {
            setWicon(cloud_icon);
        }
        else if(data.whether[0].icon === "03d" || data.whether[0].icon === "03n"){
            setWicon(drizzle_icon);
        }
        else if(data.whether[0].icon === "04d" || data.whether[0].icon === "04n"){
            setWicon(drizzle_icon);
        }
        else if(data.whether[0].icon === "09d" || data.whether[0].icon === "09n"){
            setWicon(rain_icon);
        }
        else if(data.whether[0].icon === "10d" || data.whether[0].icon === "10n"){
            setWicon(rain_icon);
        }
        else if(data.whether[0].icon === "13d" || data.whether[0].icon === "13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'onChange={onChangelocation}/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="whether-image">
            <img src={wicon} alt="" />
        </div>
        <div className="whether-temp">24°c</div>
        <div className="whether-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">
                        64%
                    </div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="wind-rate">
                        18km/h
                    </div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whetherapp