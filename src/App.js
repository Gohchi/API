import React, { Component } from 'react';
// import logo from './logo.svg';
import coin from './image/icon/coin.svg';
import aerolab from './image/icon/aerolab-logo.svg';
import './App.css';

function getData(type){
  switch(type) {
    case 'userData': return {
      "id": "5a03638052fd231590d04eb5",
      "name": "John Kite",
      "points": 2000,
      "redeemHistory": [],
      "createDate": new Date(1510171520852)
    }
    default: return null;
  }
}
class App extends Component {
  constructor(props){
    super(props)
    console.log(process.env);
    
    this.state = {
      userData: getData('userData')
    }
  }
  // componentWillMount(){
  //   if(!process.env.API_TOKEN) return;
  //   fetch('https://aerolab-challenge.now.sh/user/me', {  
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + process.env.API_TOKEN
  //     }
  //   })
  //     .then(o => o.json())
  //     .then(userData => {
  //       console.log(userData)
  //       this.setState({
  //         userData
  //       })
  //     })
  // }
  render() {
    if(this.state.userData) {
      let data = this.state.userData;
      return (
        <div className="container">
          <div className="inlineblock">
            <ul className="user-data">
              <li>
                <div className="points">
                  <div>{data.points}</div>
                  <img src={coin} alt="points" />
                </div>
              </li>
              <li><div className="name">{data.name}</div></li>
            </ul>
            <img src={aerolab} className="aerolab" alt="aerolab" />    
          </div>
          <div className="inlineblock header">
          </div>
          
        </div>
      )
    }
    return (
      <div className="container">
        Loading...
      </div>
    )
  }
}

export default App;
