import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, CardPokemonComponent, DetallePokemonComponent]
})
export class HomePageModule {}
