import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServerService 
{

  constructor(private http : HttpClient) { }

  getRecipes() : Observable<any>
  {
    return this.http.get<Recipe[]>('http://cegep.fdtt.space/v1/recipes.json');
  }
}
