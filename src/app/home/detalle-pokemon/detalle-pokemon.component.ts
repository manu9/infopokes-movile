import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/model/Pokemon';
import { PokeApiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent implements OnInit{

  detallePokemon:Pokemon = {
    id : '',
    type: '',
    name : '',
    weight : '',
    base_experience: '',
    height: '',
    ability: '',
    hp : '',
    attack : '',
    defense : '',
  };

  constructor(private activatedRoute: ActivatedRoute, private pokeApiService: PokeApiService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.cargarPokemon(id || '1');
    });
  }

  async cargarPokemon(id:string){
    const resp = await this.pokeApiService.getByID(id);
    //console.log(resp);

    this.detallePokemon= {
      id : id,
      type: resp.types[0].type.name,
      name : resp.name,
      weight : resp.weight,
      base_experience: resp.base_experience,
      height: resp.height,
      ability: resp.abilities[0].ability.name,
      hp: resp.stats[0].base_stat,
      attack: String(resp.stats[1].base_stat),
      defense: String(resp.stats[2].base_stat)
    };
  }
}
