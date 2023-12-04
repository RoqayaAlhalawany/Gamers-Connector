import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPeerComponent } from './review-peer.component';

describe('ReviewPeerComponent', () => {
  let component: ReviewPeerComponent;
  let fixture: ComponentFixture<ReviewPeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // Create a component fixture for ReviewPeerComponent
    fixture = TestBed.createComponent(ReviewPeerComponent);
    
    // Get the component instance
    component = fixture.componentInstance;
    
    // Trigger the initial change detection
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component is created successfully
    expect(component).toBeTruthy();
  });
});
