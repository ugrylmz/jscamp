import React from "react";
import axios from "axios";
export default class FeaturedCharacters extends React.Component {
  state = {
    characters: []
  };

  async componentDidMount() {
    const characters = await axios.get("https://swapi.co/api/people/");
    const { results: charactersData } = characters.data;
    this.setState({ characters: charactersData });
  }

  render() {
    return <div>Featured Characters</div>;
  }
}
