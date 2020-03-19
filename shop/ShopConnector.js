import React, { Component } from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'

// Routing
import { Route } from 'react-router-dom'

// Data
import { loadData } from '../data/ActionCreators'
import { DataTypes } from '../data/Types'


const Connector = class extends Component {
    componentDidMount(){
       this.props.loadData(DataTypes.PRODUCTS)
       this.props.loadData(DataTypes.CATEGORIES)
    }

    filterProducts = (products = [], category) => {
      return (!category ) ?
        products :
        products.filter( p => p.category.toLowerCase() === category.toLowerCase() )
    
}
    render() {
        return <>
            <Route path="/shop/products/:category?" render={
                (routeProps) => <Shop { ...this.props } { ...routeProps }
                    products = { this.filterProducts(this.props.products, routeProps.match.params.category) }
                />
            } />
         </>
            
    }
}

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    loadData
}

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(Connector)
