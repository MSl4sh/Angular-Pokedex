import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [{
  path:'pokemons',component:ListPokemonComponent},
  {path:'pokemons/:id',component:DetailsPokemonComponent},
  {path:'pokemons',redirectTo:"pokemons",pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
