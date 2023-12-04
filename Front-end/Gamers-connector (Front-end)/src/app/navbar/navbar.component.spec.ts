// This is a unit test for the `NavbarComponent` in Angular.

// Import the necessary testing utilities from the Angular core testing module.
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component to be tested.
import { NavbarComponent } from './navbar.component';

// Start the test suite for the `NavbarComponent`.
describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  // Perform setup tasks before each test case.
  beforeEach(async () => {
    // Configure the testing module by declaring the `NavbarComponent`.
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    }).compileComponents(); // Compile the component's template.
  });

  // Create an instance of the component and initialize the fixture.
  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection and initialize component properties.
  });

  // Test case: check if the component is created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
