import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      console.log(this.state.search);
      this.props.getMovies(this.state.search);
    }
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
              onClick={() => this.props.getMovies(this.state.search)}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
