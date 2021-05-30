import "./Trade.css";
import axios from "axios";
import Select from "react-select";
import Button from "../../components/Button.js";
import { useState, useEffect } from "react";

function Trade() {
  const [pokemons, setPokemons] = useState([]);
  const [player1, setPlayer1] = useState(["0", "0", "0", "0", "0", "0"]);
  const [player2, setPlayer2] = useState(["0", "0", "0", "0", "0", "0"]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        var options = res.data?.results?.map((element, index) => {
          return { value: `${index + 1}`, label: element?.name };
        });
        setPokemons(options);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const verifyTrade = () => {
    axios.post("https://poke-trader-back", {
      player1: player1,
      player2: player2,
    });
  };

  const selectPokemon = (player, position, pokemon) => {
    if (player === 1) {
      var aux = player1;
      aux[position] = pokemon;
      setPlayer1(aux);
    } else {
      var aux = player2;
      aux[position] = pokemon;
      setPlayer2(aux);
    }
    console.log(player1, player2);
  };

  return (
    <div>
      <h1>Poke Trader</h1>
      <table>
        <tr>
          <th>Player 1</th>
          <th>Player 2</th>
        </tr>
        <tr>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(1, 0, e.value)}
            />
          </td>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(2, 0, e.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(1, 1, e.value)}
            />
          </td>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(2, 1, e.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(1, 2, e.value)}
            />
          </td>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(2, 2, e.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(1, 3, e.value)}
            />
          </td>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(2, 3, e.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(1, 4, e.value)}
            />
          </td>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(2, 4, e.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(1, 5, e.value)}
            />
          </td>
          <td>
            <Select
              options={pokemons}
              onChange={(e) => selectPokemon(2, 5, e.value)}
            />
          </td>
        </tr>
      </table>
      <button onClick={() => verifyTrade()}></button>
    </div>
  );
}

export default Trade;
