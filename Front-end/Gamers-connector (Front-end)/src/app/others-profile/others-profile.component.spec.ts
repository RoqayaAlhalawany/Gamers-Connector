import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersProfileComponent } from './others-profile.component';

// Test suite for the OthersProfileComponent
describe('OthersProfileComponent', () => {
  let component: OthersProfileComponent;
  let fixture: ComponentFixture<OthersProfileComponent>;

  // Asynchronous setup before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersProfileComponent ]
    })
    .compileComponents();
  });

  // Setup before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(OthersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case: should create the OthersProfileComponent
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
