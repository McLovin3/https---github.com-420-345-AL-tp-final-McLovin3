import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormatifComponent } from './formatif/formatif.component';
import { HomeComponent } from './home/home.component';
import { JeuxComponent } from './jeux/jeux.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecettesComponent } from './recettes/recettes.component';

const routes: Routes = 
[
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'jeux',
    component : JeuxComponent
  },
  {
    path : 'formatif',
    component : FormatifComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'recettes',
    component : RecettesComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
