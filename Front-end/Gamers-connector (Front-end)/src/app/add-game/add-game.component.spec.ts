import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGameComponent } from './add-game.component';

describe('AddGameComponent', () => {
  let component: AddGameComponent;
  let fixture: ComponentFixture<AddGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGameComponent ] // Declare the component being tested
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGameComponent); // Create a component fixture for testing
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection to initialize the component
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verify if the component is successfully created
  });
});
