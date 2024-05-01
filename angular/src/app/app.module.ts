import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { ExerciseObsSubComponent } from './exercise-obs-sub/exercise-obs-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    ExerciseObsSubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
