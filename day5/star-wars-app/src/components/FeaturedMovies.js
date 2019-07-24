import React from "react";
// import axios from 'axios';
import FilmCard from "./FilmCard";

export default class FeaturedMovies extends React.Component {
  state = {
    movies: []
  };
  // async componentDidMount() {
  //   const movies = await axios.get('https://swapi.co/api/films/');
  //   const {results: moviesData} = movies.data;
  //   this.setState({movies: moviesData});
  // }

  render() {
    // const { movies } = this.state;
    return (
      <div>
        <h2>Featured Movies</h2>
        <div className="d-flex-row">
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          {
            // movies.map(
            //   movie => <FilmCard data={movie}>
            // )
          }
        </div>
      </div>
    );
  }
}
