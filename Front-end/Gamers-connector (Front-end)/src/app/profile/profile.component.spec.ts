import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

// Test suite for the ProfileComponent
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  // Setup the testing environment before running each test case
  beforeEach(async () => {
    // Configure TestBed to compile the ProfileComponent and its dependencies
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent]  // Declare the component being tested
    })
    .compileComponents();  // Compile the component and its templates
  });

  // Create an instance of the ProfileComponent before each test case
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);  // Create a ComponentFixture for the component
    component = fixture.componentInstance;  // Get the component instance from the fixture
    fixture.detectChanges();  // Trigger change detection to update the component's view
  });

  // Test case: Verify that the ProfileComponent is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();  // Assert that the component exists (truthy)
  });
});
