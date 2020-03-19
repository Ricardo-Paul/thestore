import React, { Component } from 'react'
// import { addToCart } from '../data/CartActionCreators'

export default class ProductList extends Component {
    render() {
        console.log("plist com", this.props)
        if(this.props.products == null || this.props.products.length === 0){
            return <div className="p-3 rounded border">
                <h4> Category empty</h4>
            </div>
        }
        return this.props.products.map( p => 
                <div key={ p.id } className="card mb-3 shadow-sm">
                    <h4 className="p-1 text-dark border-bottom">
                        {p.name}
                        <span className="badge m-1 badge-pill bg-primary text-white float-right" >
                            $ {p.price.toFixed(2)}
                        </span>
                    </h4>
                    <div className="card-text p-1 p-2">
                        {p.description}
                        <button className="float-right btn btn-sm btn-success" onClick={ () => this.props.addToCart(p) } >
                            add to cart
                        </button>
                    </div>
                </div>
            )
    }
}
