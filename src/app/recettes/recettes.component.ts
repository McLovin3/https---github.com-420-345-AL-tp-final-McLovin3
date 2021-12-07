import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Interfaces';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styles: [
  ]
})
export class RecettesComponent implements OnInit
{
  recipes !: Recipe[];

  constructor(private server : ServerService) { }

  ngOnInit(): void 
  {
    this.server.getRecipes().subscribe(data =>
    {
      this.recipes = data.data;
    });
  }
}
