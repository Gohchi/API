import React, { Component } from 'react';
import UserData from "./components/UserData";
import Header from "./components/Header";
import List from "./components/List";
import logo from './logo.svg';
import './App.css';

import { token, host } from './config'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userData: null,
      backendMessage: null,
      reinitpopup: false,
      hideLoading: true,
      historyMode: false,
      products: null
    }
    this.redeemProduct = this.redeemProduct.bind(this)
    this.addPoints = this.addPoints.bind(this)
    this.showHistory = this.showHistory.bind(this)
    this.updateProducts = this.updateProducts.bind(this)
  }
  showHistory(reverse){
    this.setState({
      products: null,
      historyMode: !reverse
    })
  }
  redeemProduct(productId){
    this.setState({
      reinitpopup: true,
      hideLoading: false
    })
    fetch(host + '/redeem', {  
      method: 'POST',
      body: JSON.stringify({
        productId
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(o => o.json())
      .then(response => {
          this.getUserData();
          this.setState({
            backendMessage: response.message,
            reinitpopup: false
          })
      })
  }
  getUserData(){
    fetch(host + '/user/me', {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then(o => o.json())
    .then(userData => {
        this.setState({
            userData,
            hideLoading: true
        })
    })
  }
  addPoints(amount){
    this.setState({
      reinitpopup: true,
      hideLoading: false
    })
    fetch(host + '/user/points', {  
      method: 'POST',
      body: JSON.stringify({
        amount
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
      .then(o => o.json())
      .then(response => {
          this.setState({
            backendMessage: response.message,
            userData: Object.assign({}, this.state.userData, {
                "points": response["New Points"]
            }),
            reinitpopup: false,
            hideLoading: true          
          })
      })
  }
  updateProducts(products){
    this.setState({
      products
    })
  }
  componentWillMount(){
    fetch(host + '/user/me', {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then(o => o.json())
    .then(userData => {
      // let products = this.state.products.slice()
      // products.sort(function(a, b){
      //     if (a._id > b._id)
      //         return -1 
      //     if (a._id < b._id)
      //         return 1
      //     return 0
      // })
      this.setState({
          userData,
          // products,
      })
    })
  }
  render() {
    if(this.state.userData) {
       return (
        <div className="container">
          <div className={"message" + (this.state.reinitpopup?"-hidden":"")}>
            {this.state.backendMessage}
          </div>
          <div className={"loading" + (this.state.hideLoading?"-hidden":"")}>
            <div className="spinner"></div>
          </div>
          <UserData
            name={this.state.userData.name}
            points={this.state.userData.points}
            addPoints={this.addPoints}
            showHistory={this.showHistory}
            historyMode={this.state.historyMode}
          />
          <Header />
          <List
            points={this.state.userData.points}
            redeemProduct={this.redeemProduct}
            historyMode={this.state.historyMode}
            products={this.state.products}
            updateProducts={this.updateProducts}
          />
        </div>
      )
    }
    return (
      <div className="container">
        <div>Loading...</div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App;