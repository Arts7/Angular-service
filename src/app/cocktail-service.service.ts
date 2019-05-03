import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from "./cocktail"

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  private service: HttpClient;
  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getCocktails(): Observable<Cocktail[]> {
    return this.service.get<Cocktail[]>("assets/cocktail.json")
  }
}
