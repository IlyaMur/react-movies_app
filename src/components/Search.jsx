import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              placeholder="Search"
              type="search"
              className="validate"
            />
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
