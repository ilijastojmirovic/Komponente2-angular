import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditProfilePageComponent } from './client-edit-profile-page.component';

describe('ClientEditProfilePageComponent', () => {
  let component: ClientEditProfilePageComponent;
  let fixture: ComponentFixture<ClientEditProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientEditProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientEditProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
