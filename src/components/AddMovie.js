
import React, { Component } from 'react';
import { connect } from 'react-redux'

export class AddMovie extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movieName : '',
      movieURL : ''
    }
  }

  onMovieNameChangeHandler = (event) => {

    this.setState({
      ...this.state,
      movieName : event.target.value
    })

  }

  onMoviePosterURLChangeHandler = (event) => {

    this.setState({
      ...this.state,
      movieURL : event.target.value
    })

  }

  render() {
    return (
      <div>
        <input onChange={this.onMovieNameChangeHandler} type="text" placeholder = "Movie Name" />
        <input onChange={this.onMoviePosterURLChangeHandler} type="text" placeholder = "Movie Poster URL" />
        <button onClick={() => this.props.onAddMovieHandler(this.state.movieName,this.state.movieURL)}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies : state.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMovieHandler : (name,url) => dispatch({type : 'ADD_MOVIE', movie : { name : name, posterURL : url }})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddMovie)
