import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service'
import { Cocktail } from "../cocktail"

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  public cocktails: Cocktail[];

  private service: CocktailServiceService;

  constructor(param_service: CocktailServiceService) {
    this.service = param_service;
    this.cocktails = [];
  }

  public ngOnInit() {

    this.service.getCocktails().subscribe(
      (param_cocktailz: Cocktail[]) => {
        this.cocktails = param_cocktailz;
        console.log(this.cocktails)
      }
    )
  }
}