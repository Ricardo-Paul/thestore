import React, { Component } from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'

// Routing
import { Route } from 'react-router-dom'

// Data
import { loadData } from '../data/ActionCreators'
import { addToCart } from '../data/CartActionCreators'

import { DataTypes } from '../data/Types'

const Connector = class extends Component {
  componentDidMount() {
    this.props.loadData(DataTypes.PRODUCTS)
    this.props.loadData(DataTypes.CATEGORIES)
  }

  filterProducts = (products = [], category) => {
    return (!category) ?
      products :
      products.filter(p => p.category.toLowerCase() === category.toLowerCase())

  }
  render() {
    return <>
      <Route path="/shop/products/:category?" render={
        (routeProps) => <Shop { ...this.props } {...routeProps}
          products={this.filterProducts(this.props.products, routeProps.match.params.category)}
        />
      } />
    </>

  }
}

const mapStateToProps = (dataStore) => ({
  ...dataStore
})

const mapDispatchToProps = {
  loadData, addToCart
}

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(Connector)

// All the actions and state are properties of ShopConnector,
// it can pass all of these properties down to any component by spreading them
// <Shop { ...this.props } />

// Shop now has access to everything as property
// NB: every component in <Shop /> can use these properties

// for example the <ProductList /> component in <Shop /> needs the list of products
// because all of the properties are spread in Shop
// <Shop /> spread them all in <ProductList />