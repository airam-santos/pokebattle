import {pokemon} from './pokedex.js';
import images from '../img/*.png';
const button = document.querySelector('.button');
const pokemon1=document.querySelector('.pokemon1');
const pokemon2=document.querySelector('.pokemon2');
const result=document.querySelector('.result');
button.addEventListener('click', function() {
    
    const chosen=_.shuffle(pokemon).slice(0,2);  
    const namepokemon1=chosen[0].name.english;
    const namepokemon2=chosen[1].name.english;
    pokemon1.innerHTML=`<img src="img/${images.chosen[0]}.png" alt="${namepokemon1}"></img>`; //No encuentra imagen
    pokemon2.innerHTML=`<img src="img/${images.chosen[0]}.png" alt="${namepokemon2}"></img>`;
    const winner=Math.round(Math.random());
    result.textContent= 'El ganador es '+chosen[winner].name.english;
});