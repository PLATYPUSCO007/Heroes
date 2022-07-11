import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './pages/add/add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [AddComponent, HeroeComponent, HomeComponent, ListComponent, SearchComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class HeroesModule { }
