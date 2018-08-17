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
      "points": 200,
      "redeemHistory": [],
      "createDate": new Date(1510171520852)
    }
    case 'products': return [
      {
          "_id": "5a0b35c1734d1d08bf7084c3",
          "name": "iPhone 8",
          "cost": 800,
          "category": "Phones",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
          }
      },
      {
          "_id": "5a0b35d7734d1d08bf7084c9",
          "name": "Nintendo Switch 32GB",
          "cost": 300,
          "category": "Gaming",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/Switch-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/Switch-x2.png"
          }
      },
      {
          "_id": "5a0b35df734d1d08bf7084cb",
          "name": "Macbook Pro",
          "cost": 1300,
          "category": "Laptops",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/MacbookPro-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/MacbookPro-x2.png"
          }
      },
      {
          "_id": "5a0b36ac734d1d08bf70856c",
          "name": "Acer Aspire E1-522",
          "cost": 600,
          "category": "Laptops",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/AcerAspire-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/AcerAspire-x2.png"
          }
      },
      {
          "_id": "5a0b36b3734d1d08bf70856f",
          "name": "Alienware 13",
          "cost": 1500,
          "category": "Laptops",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/Alienware13-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/Alienware13-x2.png"
          }
      },
      {
          "_id": "5a0b36bb734d1d08bf70857e",
          "name": "Samsung Tab S2",
          "cost": 230,
          "category": "Tablets & E-readers",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/SamsungTabS2-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/SamsungTabS2-x2.png"
          }
      },
      {
          "_id": "5a0b36c3734d1d08bf70857f",
          "name": "Kobo Aura",
          "cost": 150,
          "category": "Tablets & E-readers",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/KoboAura-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/KoboAura-x2.png"
          }
      },
      {
          "_id": "5a0b35e8734d1d08bf7084cf",
          "name": "Instax Mini 8",
          "cost": 80,
          "category": "Cameras",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/InstaxMini-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/InstaxMini-x2.png"
          }
      },
      {
          "_id": "5a0b35f0734d1d08bf7084df",
          "name": "Marshall Major ll",
          "cost": 300,
          "category": "Audio",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/MarshallMajorll-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/MarshallMajorll-x2.png"
          }
      },
      {
          "_id": "5a0b35f8734d1d08bf7084e3",
          "name": "Razer Blade Pro",
          "cost": 2500,
          "category": "Laptops",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/RazerBladePro-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/RazerBladePro-x2.png"
          }
      },
      {
          "_id": "5a0b3600734d1d08bf7084e5",
          "name": "Canon EOS 5D",
          "cost": 2200,
          "category": "Cameras",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/CanonEOS5D-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/CanonEOS5D-x2.png"
          }
      },
      {
          "_id": "5a0b3609734d1d08bf7084e6",
          "name": "Dell UP3218k",
          "cost": 900,
          "category": "Monitors & TV",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/Dell-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/Dell-x2.png"
          }
      },
      {
          "_id": "5a0b3611734d1d08bf7084eb",
          "name": "Phantom 2",
          "cost": 500,
          "category": "Drones",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/Phantom2-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/Phantom2-x2.png"
          }
      },
      {
          "_id": "5a0b3618734d1d08bf7084ec",
          "name": "Android Wear",
          "cost": 210,
          "category": "Phone Accessories",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/AndroidWear-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/AndroidWear-x2.png"
          }
      },
      {
          "_id": "5a0b3620734d1d08bf7084f0",
          "name": "Amazon Echo Dot",
          "cost": 50,
          "category": "Smart Home",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/AmazonEchoDot-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/AmazonEchoDot-x2.png"
          }
      },
      {
          "_id": "5a0b3628734d1d08bf7084f3",
          "name": "Sony PS4",
          "cost": 200,
          "category": "Gaming",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/SonyPS4-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/SonyPS4-x2.png"
          }
      },
      {
          "_id": "5a0b362f734d1d08bf7084fa",
          "name": "Sony SRS-X11",
          "cost": 330,
          "category": "Audio",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/SonySRSX11-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/SonySRSX11-x2.png"
          }
      },
      {
          "_id": "5a0b3637734d1d08bf7084fb",
          "name": "Samsung S8",
          "cost": 510,
          "category": "Phones",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/SamsungS8-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/SamsungS8-x2.png"
          }
      },
      {
          "_id": "5a0b3640734d1d08bf708500",
          "name": "Google Chromecast",
          "cost": 100,
          "category": "Monitors & TV",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/Chromecast-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/Chromecast-x2.png"
          }
      },
      {
          "_id": "5a0b3648734d1d08bf708502",
          "name": "Nintendo 3DS",
          "cost": 200,
          "category": "Gaming",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/Nintendo3DS-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/Nintendo3DS-x2.png"
          }
      },
      {
          "_id": "5a0b364f734d1d08bf708506",
          "name": "Razer Naga Chroma",
          "cost": 50,
          "category": "PC Accessories",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/RazerNaga-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/RazerNaga-x2.png"
          }
      },
      {
          "_id": "5a0b3658734d1d08bf70850f",
          "name": "Amazon Echo",
          "cost": 150,
          "category": "Smart Home",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/AmazonEcho-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/AmazonEcho-x2.png"
          }
      },
      {
          "_id": "5a0b3660734d1d08bf708511",
          "name": "Beats Pro",
          "cost": 220,
          "category": "Audio",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/BeatsPro-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/BeatsPro-x2.png"
          }
      },
      {
          "_id": "5a0b3668734d1d08bf708516",
          "name": "Lenovo Yoga Book 10”",
          "cost": 250,
          "category": "Laptops",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/LenovoYogaBook-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/LenovoYogaBook-x1.png"
          }
      },
      {
          "_id": "5a0b3670734d1d08bf70851f",
          "name": "Sony DSC-RX10",
          "cost": 1200,
          "category": "Cameras",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/SonyDSCRX10-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/SonyDSCRX10-x1.png"
          }
      },
      {
          "_id": "5a0b3678734d1d08bf708537",
          "name": "Go Pro Hero4",
          "cost": 330,
          "category": "Cameras",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/GoPro-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/GoPro-x2.png"
          }
      },
      {
          "_id": "5a0b3680734d1d08bf70853b",
          "name": "iPad Mini",
          "cost": 280,
          "category": "Tablets & E-readers",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/iPadMini-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/iPadMini-x2.png"
          }
      },
      {
          "_id": "5a0b3687734d1d08bf70854d",
          "name": "Nikon D300",
          "cost": 220,
          "category": "Cameras",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/NikonD300-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/NikonD300-x2.png"
          }
      },
      {
          "_id": "5a0b368e734d1d08bf708558",
          "name": "Parrot AR",
          "cost": 200,
          "category": "Drones",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/ParrotAR-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/ParrotAR-x2.png"
          }
      },
      {
          "_id": "5a0b3695734d1d08bf70855d",
          "name": "Lenovo Yoga Tab 3",
          "cost": 200,
          "category": "Tablets & E-readers",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/LenovoYogaTab-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/LenovoYogaTab-x2.png"
          }
      },
      {
          "_id": "5a0b369e734d1d08bf708567",
          "name": "Moto G5",
          "cost": 230,
          "category": "Phones",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/MotoG5-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/MotoG5-x2.png"
          }
      },
      {
          "_id": "5a0b36a5734d1d08bf70856b",
          "name": "Razer Blackwidow Chroma",
          "cost": 100,
          "category": "PC Accesories",
          "img": {
              "url": "https://aerolab-challenge.now.sh/images/RazerBlackwidow-x1.png",
              "hdUrl": "https://aerolab-challenge.now.sh/images/RazerBlackwidow-x2.png"
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
      userData: null,
    //   userData: getData('userData'),
      products: getData('products'),
      pager: {
        total: 0,
        current: 1,
        size: 8,
        sort: 'MostRecent'
      },
      backendMessage: null
    }
    this.sortList = this.sortList.bind(this)
    this.redeemProduct = this.redeemProduct.bind(this)
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
    fetch('https://aerolab-challenge.now.sh/redeem', {  
      method: 'POST',
      body: JSON.stringify({
        productId
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjczNzk0ZjQ4ODVhMzAwNTg3MzYxMGUiLCJpYXQiOjE1MzQyOTQzNTF9.7AcaaniL-byI3YUtGXiONH5DKWaqcc5hst1IxHJfs4I'
      }
    })
      .then(o => o.json())
      .then(response => {
          this.setState({
            backendMessage: response.message
          })
      })
  }
  componentWillMount(){
    fetch('https://aerolab-challenge.now.sh/user/me', {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjczNzk0ZjQ4ODVhMzAwNTg3MzYxMGUiLCJpYXQiOjE1MzQyOTQzNTF9.7AcaaniL-byI3YUtGXiONH5DKWaqcc5hst1IxHJfs4I'
      }
    })
      .then(o => o.json())
      .then(userData => {
        // console.log(userData)
        // this.setState({
        //   userData
        // })
        let products = this.state.products.slice()
        products.sort(function(a, b){
            if (a._id > b._id)
                return -1 
            if (a._id < b._id)
                return 1
            return 0
        })
        this.setState({
                userData,
                products,
                pager: Object.assign({}, this.state.pager, {
                total: this.state.products.length
            })
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
            prevPage={() => this.prevPage()}
            nextPage={() => this.nextPage()}
            sortList={this.sortList}
            points={this.state.userData.points}
            redeemProduct={this.redeemProduct}
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
