import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedComponent ] // Declare the component being tested
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent); // Create a component fixture for testing
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection to initialize the component
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verify if the component is successfully created
  });
});
