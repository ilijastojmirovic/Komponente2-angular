import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHomePageComponent } from './client-home-page.component';

describe('ClientHomePageComponent', () => {
  let component: ClientHomePageComponent;
  let fixture: ComponentFixture<ClientHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
