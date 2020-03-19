import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CartSummary extends Component {

  getSummary = () => {
    if (this.props.cartItem > 0) {
      return <span>
        {this.props.cartItem} item(s),
      ${this.props.cartPrice.toFixed(2)}
      </span>
    } else {
      return <span> Your cart: (empty) </span>
    }
  }

  getLinkClasses = () => {
    return `btn btn-sm bg-dart text-white ${this.props.cartItems === 0 ? "disabled" : ""}`
  }

  render() {
    console.log("cartSummary Props", this.props)
    return <div className="float-right">
      <small>
        {this.getSummary()}
        <Link className={this.getLinkClasses()} to="/shop/cart" >
          <i className="fa fa-shopping-cart text-success mt-2"></i>
        </Link>
      </small>
    </div>
  }
}

