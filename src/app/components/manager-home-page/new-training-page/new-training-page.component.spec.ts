import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingPageComponent } from './new-training-page.component';

describe('NewTrainingPageComponent', () => {
  let component: NewTrainingPageComponent;
  let fixture: ComponentFixture<NewTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTrainingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
