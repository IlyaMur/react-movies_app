import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends Component {
  state = {
    movies: [],
    movie: "",
  };

  componentDidMount() {
    this.getMovies("terminator");
  }

  getMovies = (movieName) => {
    fetch(`http://www.omdbapi.com/?apikey=xxxxxx&s=${movieName}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search getMovies={this.getMovies} />
        {movies ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
