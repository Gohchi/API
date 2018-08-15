import React, { Component } from 'react';
import UserData from "./components/UserData";
import Header from "./components/Header";
// import logo from './logo.svg';
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
      return (
        <div className="container">
          <UserData name={this.state.userData.name} points={this.state.userData.points}/>
          <Header />
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
