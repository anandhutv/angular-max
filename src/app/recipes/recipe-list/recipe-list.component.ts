import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Another Test Food', 'what are the items','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  new Recipe('A Test Recipe', 'This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')

];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe){
    console.log(recipe)
    this.recipeWasSelected.emit(recipe);
  }
}
