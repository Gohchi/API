import React, { Component } from 'react';
import UserData from "./components/UserData";
import Header from "./components/Header";
import List from "./components/List";
import logo from './logo.svg';
import './App.css';

const host = 'https://aerolab-challenge.now.sh',
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjczNzk0ZjQ4ODVhMzAwNTg3MzYxMGUiLCJpYXQiOjE1MzQyOTQzNTF9.7AcaaniL-byI3YUtGXiONH5DKWaqcc5hst1IxHJfs4I';

function getProductsByPager(products, pager){
  let begin = (pager.current-1) * pager.size
  let end = begin + pager.size
  return products.slice(begin, end)
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userData: null,
    //   userData: getData('userData'),
      products: null,
    //   products: getData('products'),
      pager: {
        total: 0,
        current: 1,
        size: 8,
        sort: 'MostRecent'
      },
      backendMessage: null,
      reinitpopup: false,
      hideLoading: true,
      historyMode: true
    }
    this.sortList = this.sortList.bind(this)
    this.redeemProduct = this.redeemProduct.bind(this)
    this.addPoints = this.addPoints.bind(this)
    this.showHistory = this.showHistory.bind(this)
  }
  prevPage(){
    if(this.state.pager.current === 1) return;
    this.setState({
      pager: Object.assign({}, this.state.pager, {
        current: this.state.pager.current-1
      })
    })
  }
  nextPage(){
    this.setState({
      pager: Object.assign({}, this.state.pager, {
        current: this.state.pager.current+1
      })
    })
  }
  showHistory(){
    this.setState({
      historyMode: true
    })
  }
  sortList(sortBy){
    let products = this.state.products.slice()
    switch (sortBy){
      case 'HighestPrice':
        products.sort(function(a, b){
          return b.cost-a.cost
        })
        break;
      case 'LowestPrice':
        products.sort(function(a, b){
          return a.cost-b.cost
        })
        break;
      default: // case 'MostRecent':
        products.sort(function(a, b){
          if (a._id > b._id)
            return -1 
          if (a._id < b._id)
            return 1
          return 0
        })
        break;
    }
    this.setState({
      products: products,
      pager: Object.assign({}, this.state.pager, {
        current: 1,
        sort: sortBy
      })
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
      fetch(host + '/products', {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
        .then(o => o.json())
        .then(products => {
          products.sort(function(a, b){
              if (a._id > b._id)
                  return -1 
              if (a._id < b._id)
                  return 1
              return 0
          })
          this.setState({
                products,
                pager: Object.assign({}, this.state.pager, {
                    total: products.length
                }),
                hideLoading: true
            })
          })
  }
  render() {
    if(this.state.userData) {
      let products = this.state.products ? getProductsByPager(this.state.products, this.state.pager) : null
      let showing = products ? (this.state.pager.current-1)*this.state.pager.size+products.length : 0
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
          />
          <Header />
          <List
            products={products}
            pager={this.state.pager}
            showing={showing}
            prevPage={() => this.prevPage()}
            nextPage={() => this.nextPage()}
            sortList={this.sortList}
            points={this.state.userData.points}
            redeemProduct={this.redeemProduct}
            historyMode={this.state.historyMode}
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