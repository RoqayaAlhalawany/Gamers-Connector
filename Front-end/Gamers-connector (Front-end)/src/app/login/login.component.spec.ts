import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // Create an instance of the component
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // Trigger change detection to initialize the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component is successfully created
    expect(component).toBeTruthy();
  });
});
