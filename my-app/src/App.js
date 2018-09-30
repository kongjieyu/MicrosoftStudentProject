import React from "react";
// import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Titles from "./components/Titles";
// import HomeComponent from "./components/HomeComponent";
//import MapContainer from "./components/MapContainer";

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



const API_KEY = "97a8184d075bda7441b0e561f829a612";


class App extends React.Component{
  // creat own method
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    // prevent the whole page to reload;
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data); 
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the Value"
      })
    }
    
  }

  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="fluid-container">
              <div className="row">
                <div className="col-md-5 title-container">
                    <Titles />
                </div>
                <div className="col-md-7 form-container">
                  <Form getWeather={this.getWeather}/>
                    <Weather 
                      temperature = {this.state.temperature}
                      city = {this.state.city}
                      country = {this.state.country}
                      humidity = {this.state.humidity}
                      description = {this.state.description}
                      error = {this.state.error}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default App;
