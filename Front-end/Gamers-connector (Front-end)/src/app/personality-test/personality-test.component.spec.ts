import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTestComponent } from './personality-test.component';

describe('PersonalityTestComponent', () => {
  let component: PersonalityTestComponent;
  let fixture: ComponentFixture<PersonalityTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityTestComponent ]  // Declare the component being tested
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityTestComponent);  // Create a component fixture for testing
    component = fixture.componentInstance;  // Get the component instance for testing
    fixture.detectChanges();  // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Check if the component instance is truthy (i.e., not null or undefined)
  });
});
