import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

const appRoutes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const appRouting = RouterModule.forRoot(appRoutes);
