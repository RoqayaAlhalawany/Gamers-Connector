import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpeersComponent } from './findpeers.component';

describe('FindpeersComponent', () => {
  let component: FindpeersComponent;
  let fixture: ComponentFixture<FindpeersComponent>;

  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [ FindpeersComponent ]  // Declare the component being tested
    })
    .compileComponents();  // Compile the component's template and CSS
  });

  beforeEach(() => {
    // Create an instance of the component and fixture
    fixture = TestBed.createComponent(FindpeersComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();  // Trigger change detection and update the component
  });

  it('should create', () => {
    // Verify that the component is created successfully
    expect(component).toBeTruthy();
  });
});
