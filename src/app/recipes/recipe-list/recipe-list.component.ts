import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A test Recipe","a test","https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg"),
    new Recipe("A test Recipe2 ","a test 2","https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg")

  ];

  constructor(){}
  ngOnInit(){}

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);


  }

}
