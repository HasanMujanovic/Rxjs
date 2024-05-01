import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseObsSubComponent } from './exercise-obs-sub.component';

describe('ExerciseObsSubComponent', () => {
  let component: ExerciseObsSubComponent;
  let fixture: ComponentFixture<ExerciseObsSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseObsSubComponent]
    });
    fixture = TestBed.createComponent(ExerciseObsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
