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
    
    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === 0){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("whether-temp");
        const location = document.getElementsByClassName("whether-location");


        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHtml = data.wind.speed + "km/h";
        temperature[0].innerHtml = data.main.temperature + "°c";
        location[0].innerHtml = data.name;

        // if(data.whether[0].icon === "01d" || data.whether[0].icon === "01n")
        // {
        //     setWicon
        // }
        // else if(data.whether[0].icon === "02n" || data.whether[0].icon === "02n"){}
    

    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='Search'/>
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="whether-image">
            <img src={cloud_icon} alt="" />
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