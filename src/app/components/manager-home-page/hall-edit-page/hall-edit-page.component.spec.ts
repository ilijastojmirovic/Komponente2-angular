import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallEditPageComponent } from './hall-edit-page.component';

describe('HallEditPageComponent', () => {
  let component: HallEditPageComponent;
  let fixture: ComponentFixture<HallEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HallEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HallEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
