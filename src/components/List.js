import React, { Component } from 'react';
import Tbar from "./Tbar";
// import Pager from "./Pager";
import Products from "./Products";
import './List.css';


class List extends Component {
  render() {
    return (
      <div className="inlineblock list">
        <div className="body">
          <Tbar 
            prevPage={this.props.prevPage}
            nextPage={this.props.nextPage}
            showing={this.props.showing}
            pager={this.props.pager}
            sortList={this.props.sortList}
          />
          <Products
            products={this.props.products}
            points={this.props.points}
            redeemProduct={this.props.redeemProduct}
          />
          {/* <div className="bbar test">
            <Pager showing={this.props.showing} total={this.props.pager.total} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default List;