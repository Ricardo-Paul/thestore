import React, { Component, Fragment } from 'react'
import ToggleLink from '../ToggleLink'

export default class CategoryNavigation extends Component {
  render() {
    return <Fragment>
      <ToggleLink exact={true} to={this.props.baseUrl}> All </ToggleLink>
      {this.props.categories && this.props.categories.map(cat =>
        <ToggleLink key={cat} to={`${this.props.baseUrl}/${cat.toLowerCase()}`} >
          {cat}
        </ToggleLink>
      )}
    </Fragment>
  }
}

//