import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { CaloriesPipe } from './calories.pipe';
import { MealEditComponent } from './meal-edit/meal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealFormComponent,
    CaloriesPipe,
    MealEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
