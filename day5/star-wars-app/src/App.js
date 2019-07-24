import React from "react";
import Header from "./components/Header";
import FeaturedMovies from "./components/FeaturedMovies";
import FeaturedCharacters from "./components/FeaturedCharacters";

class App extends React.Component {
  render() {
    return (
      <main className="d-header">
        <Header />
        <FeaturedMovies />
        <FeaturedCharacters />
      </main>
    );
  }
}
export default App;
