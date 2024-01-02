import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTrainingsComponent } from './client-trainings.component';

describe('ClientTrainingsComponent', () => {
  let component: ClientTrainingsComponent;
  let fixture: ComponentFixture<ClientTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientTrainingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
