import React, { Component } from 'react';
import Tbar from "./Tbar";
import Products from "./Products";
import History from "./History";
import './List.css';

import { token, host } from './../config'

function getProductsByPager(products, pager){
  let begin = (pager.current-1) * pager.size
  let end = begin + pager.size
  return products.slice(begin, end)
}
class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      // products: null,
      pager: {
        total: 0,
        current: 1,
        size: 8,
        sort: 'MostRecent'
      }
    }
    this.sortList = this.sortList.bind(this)
    this.getCatalogue = this.getCatalogue.bind(this)
    this.getHistory = this.getHistory.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
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
    let products = this.props.products.slice()
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
        if(this.props.historyMode) {
          products.sort(function(a, b){
            if (a.createDate > b.createDate)
              return -1 
            if (a.createDate < b.createDate)
              return 1
            return 0
          })
        } else {
          products.sort(function(a, b){
            if (a._id > b._id)
              return -1 
            if (a._id < b._id)
              return 1
            return 0
          })
        }
        break;
    }
    this.setState({
      // products: products,
      pager: Object.assign({}, this.state.pager, {
        current: 1,
        sort: sortBy
      })
    })
    this.props.updateProducts(products);
  }
  getCatalogue(){
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
        // products,
        pager: Object.assign({}, this.state.pager, {
            total: products.length
        }),
        hideLoading: true
      })
      this.props.updateProducts(products);
    })
  }
  getHistory(){
    if(this.props.historyMode);
    fetch(host + '/user/history', {  
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
        if (a.createDate > b.createDate)
          return -1 
        if (a.createDate < b.createDate)
          return 1
        return 0
      })
      this.setState({
        pager: Object.assign({}, this.state.pager, {
          total: products.length,
          current: 1
        })
      })
      this.props.updateProducts(products);
    })
  }
  render() {
    let products = this.props.products ? getProductsByPager(this.props.products, this.state.pager) : null
    let showing = products ? (this.state.pager.current-1)*this.state.pager.size+products.length : 0
    return (
      <div className="inlineblock list">
        <div className="body">
          <Tbar 
            prevPage={this.prevPage}
            nextPage={this.nextPage}
            showing={showing}
            pager={this.state.pager}
            sortList={this.sortList}
          />
          {this.props.historyMode ?
            <History
              getHistory={this.getHistory}
              products={products}
            //  reconfigurePager={this.reconfigurePager}
            />
          :
            <Products
              getCatalogue={this.getCatalogue}
              products={products}
              points={this.props.points}
              redeemProduct={this.props.redeemProduct}
            />
          }
          {/* <div className="bbar test">
            <Pager showing={this.props.showing} total={this.props.pager.total} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default List;