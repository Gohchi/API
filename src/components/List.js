import React, { Component } from 'react';
import Pager from "./Pager";
import Sorter from "./Sorter";
import './List.css';


class List extends Component {
  render() {
    return (
      <div className="inlineblock list">
        <div className="body">
          <div className="tbar">
            <Pager showing={this.props.showing} total={this.props.pager.total} />
            <div> | </div>
            <Sorter sortList={this.props.sortList} />
            <div className="page-changer"> &lt; </div>
            <div className="page-changer"> &gt; </div>
          </div>
          <div className="product-list">
            {this.props.products.map(product => {
                /*
                  onClick={() => this.props.subscribeToRoom(room.id)}
                */
                return (
                    <div
                      key={product.id}
                      className="product"
                    >
                      <div className="buy"></div>
                      <div>
                        <img src={product.img.url} alt={product.name} />
                      </div>
                      <div className="separator"></div>
                      <div className="info">
                        {/* <h2>{product.cost}</h2> */}
                        <h3>{product.category}</h3>
                        <h2>{product.name}</h2>
                      </div>
                    </div>
                )
            })}
          </div>
          <div className="bbar test">
            <Pager showing={this.props.showing} total={this.props.pager.total} />
          </div>
        </div>
      </div>
    );
  }
}

export default List;