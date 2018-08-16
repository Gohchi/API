import React, { Component } from 'react';
import Pager from "./Pager";
import Sorter from "./Sorter";
import './Tbar.css';

class Tbar extends Component {
  render() {
    let prevPage = <div className="page-changer" onClick={() => this.props.prevPage()} > &lt; </div>
    return (
      <div className="tbar">
        <div className="container">
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
      </div>
    );
  }
}

export default Tbar;
