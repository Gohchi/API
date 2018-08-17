import React, { Component } from 'react';
import './Products.css';

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMaskFor: null
    }
  }
  showMask(id){
    if(this.state.showMaskFor === id) return;
    this.setState({
      showMaskFor: id
    })
  }
  render() {
    return (
      <div className="product-list">
        {this.props.products.map(product => {
          let diff = product.cost - this.props.points;
          let active = this.state.showMaskFor === product._id && diff <= 0 ? " active" : "";
          let available = diff <= 0 ?
            <div className={"icon"+ active} ></div>
            : <div className="icon-disabled" >You need {diff}
                <div className="coin"></div>
              </div>;
          return (
            <div
              key={product._id}
              className="product"
              onMouseOver={() => this.showMask(product._id)}
            >
              <div className={"mask" + active} >
                <div className="container">
                  <div>{product.cost}</div>
                  <div className="img"></div>
                  <div className="button">Redeem now</div>
                </div>
              </div>
              {available}
              <div>
                <img src={product.img.url} alt={product.name} />
              </div>
              <div className="separator"></div>
              <div className="info">
                {/* <h2>{product.cost}</h2> */}
                <h3>{product.category}</h3>
                <h2>{product.name} - {product.cost}</h2>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Products;
