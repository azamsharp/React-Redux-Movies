
import React, { Component } from 'react';
import { connect } from 'react-redux'

export class ListMovies extends Component {

  render() {

    const moviesListItems = this.props.movies.map(movie => {
      return <div>
      <img style={{width: 100, height: 100}} src={movie.posterURL} />
      <li>{movie.name}</li>
      </div>
    })

    return (
      <ul>
        {moviesListItems}
      </ul>
    )
  }

}

const mapStateToProps = state => {
  return {
    movies : state.movies
  }
}


export default connect(mapStateToProps)(ListMovies)
