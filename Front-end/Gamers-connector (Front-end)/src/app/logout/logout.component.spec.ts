import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [LogoutComponent], // Declare the component being tested
    }).compileComponents();
  });

  beforeEach(() => {
    // Create an instance of the component and initialize it
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Perform the test
    expect(component).toBeTruthy(); // Check if the component is created successfully
  });
});
