// Import necessary testing utilities from Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Import the component being tested
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  // Setup function that is executed before each test case
  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    }).compileComponents(); // Compile the component and its dependencies
  });

  beforeEach(() => {
    // Create an instance of the component fixture
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger the initial change detection cycle
  });

  // Test case to verify whether the component is successfully created
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component to be truthy (i.e., not null or undefined)
  });
});
