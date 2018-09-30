import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 

 
 
 
const API_KEY = "AIzaSyBXOfFdXqwHZT1yetcrFC_OuSiQcAYOXos"  // how to get key - step are below
 
class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
      console.warn("result return here",this.state.place)
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          //locationBoxStyle={'custom-style'}
          //locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default HomeComponent;