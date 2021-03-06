import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  shoppingList: any = [];

  constructor() {

  }

  private isDuplicate(item) {
     return this.shoppingList.find(function(listItem){
         return item.recipeTitle === listItem.recipeTitle;
     })
  }

  addToList(item){
    if(!this.isDuplicate(item)){
      this.shoppingList.push(item);
    }
  }

  removeRecipe(index){
    this.shoppingList.splice(index, 1);
    return this.shoppingList;
  }

  deleteIngredient(recipeIndex, ingredientIndex){
    this.shoppingList[recipeIndex].ingredientsList.splice(ingredientIndex, 1);
    return this.shoppingList;
  }

}
