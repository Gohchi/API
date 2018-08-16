import React, { Component } from 'react';
import UserData from "./components/UserData";
import Header from "./components/Header";
import List from "./components/List";
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
    case 'products': return [
      {
        "_id": "5a033eeb364bf301523e9b92",
        "name": "Sandalia Pale Gold YSL",
        "cost": 200,
        "category": "Indumentaria",
        "img": {
          "url": "https://www.atoz2u.com/image/cache/catalog/IT%20/Dell/Laptop/dell-alienware-17-r5-ca17-1-200x200.jpg",
          // "url": "https://coding-challenge-api-huojtyfzzb.now.sh/images/Alienware13-x2.png",
          "hdUrl": "https://coding-challenge-api-huojtyfzzb.now.sh/images/Alienware13-x2.png"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9b93",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9b94",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9b95",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9b96",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9b97",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9b98",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9b99",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9c00",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9c01",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      },
      {
        "_id": "5a033f0f364bf301523e9c02",
        "name": "iPhone 7 Case Sea-Blue",
        "cost": 200,
        "category": "Accesorios",
        "img": {
          "url": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725",
          "hdUrl": "https://cdn.shopify.com/s/files/1/0101/2522/products/apple_iphone_7_plata.jpg?v=1515597725"
        }
      }
    ];
    default: return null;
  }
}
function getProductsByPager(products, pager){
  let begin = (pager.current-1) * pager.size
  let end = begin + pager.size
  return products.slice(begin, end)
}
class App extends Component {
  constructor(props){
    super(props)    
    this.state = {
      userData: getData('userData'),
      products: getData('products'),
      pager: {
        total: 0,
        current: 1,
        size: 8,
      }
    }
  }
  componentWillMount(){
    this.setState({
      pager: Object.assign({}, this.state.pager, {
        total: this.state.products.length
      })
    })
  }
  render() {
    if(this.state.userData) {
      let products = getProductsByPager(this.state.products, this.state.pager)
      let showing = (this.state.pager.current-1)*this.state.pager.size+products.length
      return (
        <div className="container">
          <UserData name={this.state.userData.name} points={this.state.userData.points}/>
          <Header />
          <List
            products={products}
            pager={this.state.pager}
            showing={showing}
          />
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
