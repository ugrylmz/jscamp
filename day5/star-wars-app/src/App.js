import React from "react";
import Header from "./components/Header";
import FeaturedMovies from "./components/FeaturedMovies";
import FeaturedCharacters from "./components/FeaturedCharacters";

class App extends React.Component {
  render() {
    return (
      <div className="st-container">
        <Header />
        <main className="d-header">
          {/* <FeaturedMovies /> */}
          <FeaturedCharacters />
        </main>
      </div>
    );
  }
}
export default App;
