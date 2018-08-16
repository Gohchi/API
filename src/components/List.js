import React, { Component } from 'react';
import Pager from "./Pager";
import Sorter from "./Sorter";
import Products from "./Products";
import './List.css';


class List extends Component {
  render() {
    let prevPage = <div className="page-changer" onClick={() => this.props.prevPage()} > &lt; </div>
    return (
      <div className="inlineblock list">
        <div className="body">
          <div className="tbar">
            <Pager showing={this.props.showing} total={this.props.pager.total} />
            <div> | </div>
            <Sorter
              sortBy={this.props.pager.sort}
              sortList={this.props.sortList} />
            {this.props.pager.current > 1 ? prevPage : null}
            <div
              className="page-changer"
              onClick={() => this.props.nextPage()}
            > &gt; </div>
          </div>
          <Products products={this.props.products} />
          <div className="bbar test">
            <Pager showing={this.props.showing} total={this.props.pager.total} />
          </div>
        </div>
      </div>
    );
  }
}

export default List;