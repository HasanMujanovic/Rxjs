import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { ExerciseObsSubComponent } from './exercise-obs-sub/exercise-obs-sub.component';
import { FromComponent } from './creation-operators/from/from.component';
import { OfComponent } from './creation-operators/of/of.component';
import { TimerComponent } from './creation-operators/timer/timer.component';
import { IntervalComponent } from './creation-operators/interval/interval.component';
import { ForkJoinComponent } from './creation-operators/fork-join/fork-join.component';
import { CombineLatestComponent } from './creation-operators/combine-latest/combine-latest.component';
import { FilterComponent } from './pipeable-operators/filter/filter.component';
import { MapComponent } from './pipeable-operators/map/map.component';
import { TapComponent } from './pipeable-operators/tap/tap.component';
import { DebounceTimeComponent } from './pipeable-operators/debounce-time/debounce-time.component';
import { CatchErrorComponent } from './pipeable-operators/catch-error/catch-error.component';
import { ExamplesComponent } from './flatening-operators/examples/examples.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    ExerciseObsSubComponent,
    FromComponent,
    OfComponent,
    TimerComponent,
    IntervalComponent,
    ForkJoinComponent,
    CombineLatestComponent,
    FilterComponent,
    MapComponent,
    TapComponent,
    DebounceTimeComponent,
    CatchErrorComponent,
    ExamplesComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
