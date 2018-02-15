
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export class Header extends Component {

  render() {
    return (
      <div style={{backgroundColor : 'lightgray'}}>
        <div>
          <Link to = '/'>Home</Link>
        </div>
        <div>
          <Link to = '/add-movie'>Add Movie</Link>
        </div>
        <div>
         <Link to = '/list-all-movies'> List All Movies </Link>
        </div>
      </div>
    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <h1>Footer</h1>
    )
  }
}
