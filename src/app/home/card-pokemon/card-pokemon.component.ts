import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Resultado } from 'src/app/model/Pokeapi';
import { PokeApiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {
  constructor(private pokeApiService:PokeApiService, private router:Router){}

  ngOnChanges(changes: SimpleChanges): void {
    this.extraerInformacion();
  }

  @Input() data?:Resultado;

  id:string = '0';

  extraerInformacion(){
    if(this.data){
      this.id = this.data.url.substring(34, this.data.url.length-1);
    }

    if(this.data?.url == ''){
      this.id = this.data.id;
    }

    this.pokeApiService.getByID(this.id);
  }

  detallePkemon():void{
    this.router.navigate([`detalle/${this.id}`]);
  }
}
