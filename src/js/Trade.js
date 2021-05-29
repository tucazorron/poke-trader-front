import '../css/Trade.css';
import axios from 'axios';
import Select from 'react-select';

function getPokemons() {
	var pokemons
  	axios.get('http://pokeapi.co/api/v2/pokemon')
		.then(res => {
			pokemons = res.data
		});
	console.log(pokemons)
}

const options = [
	{value: "1", label: "Charmander"}
]

function Trade() {
	return (
		<h1>Bxblue - Poke Trade</h1>
		<h2>Jogador 1</h2>
		<Select options = {options}/>
		// <table>
		// 	<tr>
		// 		<th>Jogador 1</th>
		// 		<th>Jogador 2</th>
		// 	</tr>
		// 	<tr>
		// 		<Select/>
		// 	</tr>
		// </table>
		
	);
}

export default Trade;
