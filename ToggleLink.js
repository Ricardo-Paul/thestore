import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

export default class ToggleLink extends Component {
    render() {
        return <Route path={ this.props.to } exact={ this.props.exact } children={
            routeProps => {
                const baseClasses = "btn btn-block"
                const activeClass = "btn-primary"
                const inActiveClass = "btn btn-secondary"

                const combinedClasses = `${baseClasses} ${routeProps.match ? activeClass : inActiveClass }`

                return <Link to={ this.props.to } className={combinedClasses} >
                    {this.props.children}
                </Link>
            }
        } />
    }
}
