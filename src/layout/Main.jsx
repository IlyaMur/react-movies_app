import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const MOVIE_ACCESS = process.env.REACT_APP_KEY;

class Main extends Component {
  state = {
    movies: [],
    movie: "terminator",
    type: "",
    loading: true,
  };

  componentDidMount() {
    this.getMovies(this.state.movie, this.state.type);
  }

  getMovies = (movieName, type) => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${MOVIE_ACCESS}&s=${movieName}&type=${type}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.log(error);
        this.state({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search getMovies={this.getMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
