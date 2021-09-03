import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.getMovies(this.state.search, this.state.type);
    }
  };

  handleRadio = (e) => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
              placeholder="Search"
              type="search"
              className="validate"
            />
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.getMovies(this.state.search, this.state.type)
              }
            >
              SEARCH
            </button>
            <form className="radio-search">
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    value=""
                    type="radio"
                    onChange={this.handleRadio}
                    checked={this.state.type === ""}
                  />
                  <span>All</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    value="movie"
                    type="radio"
                    onChange={this.handleRadio}
                    checked={this.state.type === "movie"}
                  />
                  <span>Only movies</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    value="series"
                    type="radio"
                    onChange={this.handleRadio}
                    checked={this.state.type === "series"}
                  />
                  <span>Only series</span>
                </label>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
