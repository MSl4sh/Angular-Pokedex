import { Component, OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemon';
import {Pokemon} from './pokemon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-pokedex';
  // pokemonSelected : Pokemon|undefined;
  // pokemonList:Pokemon[]= POKEMONS;
  ngOnInit(){
    // console.table(this.pokemonList)
  }
  // selectPokemon(pokemon:any){
  //   // console.log(pokemon.name)
  // }

  // selectPokemonById(pokemonid:string){
  //   // const pokemon :Pokemon |undefined =this.pokemonList.find(pokemon=>
  //   //   pokemon.id===+pokemonid
  //   )
    // this.pokemonSelected = pokemon

  // }

  
}
