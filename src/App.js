import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/card-list.comp";
import { searchBox, SearchBox } from "./Components/search-box/search-box.comp";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((names) => this.setState({ monsters: names }));
  }
  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield)
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchfield: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
