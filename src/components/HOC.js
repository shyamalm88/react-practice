import React, { Component } from "react";
const initialState = {
  data: [],
  term: "",
};

function HOC(WrappedComponent, entity, title) {
  return class extends Component {
    state = initialState;
    fetchData = async () => {
      const data = await fetch(
        entity === "user"
          ? "https://jsonplaceholder.typicode.com/users"
          : "https://jsonplaceholder.typicode.com/todos"
      );
      const dataJson = await data.json();
      this.setState({ ...this.state, data: dataJson });
    };

    componentDidMount() {
      this.fetchData();
    }
    render() {
      let { term, data } = this.state;
      let filterData = data.slice(0, 10).filter((d) => {
        if (entity === "user") {
          const { name } = d;
          return name.toLowerCase().indexOf(term) >= 0;
        } else if (entity === "todo") {
          const { title } = d;
          return title.toLowerCase().indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <h1>{title}</h1>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filterData} />
        </div>
      );
    }
  };
}

export default HOC;
