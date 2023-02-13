import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import {POKEMONS}from '../mock-pokemon'

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router){}
  declare pokemonList: Pokemon[];
  pokemon :Pokemon|undefined;
  
  ngOnInit(){
    this.pokemonList=POKEMONS
    const pokemonId:string|null =this.route.snapshot.paramMap.get('id')
    //j'utilise le router, snapshot me permet d'accéder a la donnée à l'instané de mon url , paramMap me permet d'iterrer sur chacun des paramètre de mon url
    if(pokemonId){
      this.pokemon=this.pokemonList.find(monstre=> monstre.id==+pokemonId)
    }
    
  }
}
