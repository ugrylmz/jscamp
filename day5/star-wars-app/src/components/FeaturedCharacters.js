import React from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "../styles/featuredCharacters.css";

const characterAvatarLink = [
  "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=400",
  "https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C1%2C1408%2C792&width=400",
  "https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=0%2C0%2C1536%2C864&width=400",
  "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=400"
];
export default class FeaturedCharacters extends React.Component {
  state = {
    characters: []
  };

  async componentDidMount() {
    const charactersFetch = await axios.get("https://swapi.co/api/people/");
    const feauteredCharacter = charactersFetch.data.results.filter(
      (character, index) => index < 4
    );
    this.setState({ characters: feauteredCharacter });
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
        <h2>Featured Characters</h2>
        <div className="d-flex-row container">
          {characters.map((character, index) => (
            <CharacterCard
              key={index}
              chaId={index}
              chaDet={character.name}
              imgLink={characterAvatarLink[index]}
            />
          ))}
        </div>
      </div>
    );
  }
}
