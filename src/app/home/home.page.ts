import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokeApiService } from '../services/pokeapi.service';
import { Resultado } from '../model/Pokeapi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private pokeApiService: PokeApiService) {}

  searchTerm = '';

  listaPokemon:Resultado[] = [];

  ngOnInit(): void {
    this.cargarPokemones();
  }

  async cargarPokemones(){
    this.listaPokemon = [...this.listaPokemon, ...await this.pokeApiService.getPokemones()];
  }

  async buscarPokemon(){
    let name = this.searchTerm.toLowerCase();
    let errorMsg = '';
    this.searchTerm = '';

    if(!this.pokeApiService.nameExist(name)){
      errorMsg = `Error: Nombre de pokemon ${name} no existe`;
      //this.tagTxtError.nativeElement.innerHTML = errorMsg;
      return
    }
    //this.tagTxtError.nativeElement.innerHTML = errorMsg;

    this.listaPokemon = [];

    const resp = await this.pokeApiService.getByName(name);

    const pokemon:Resultado = {
      name : resp.name,
      url : '',
      id: resp.id
    }

    this.listaPokemon.push(pokemon);
  }

  reset():void{
    this.listaPokemon = [];
    this.cargarPokemones();
  }
}
