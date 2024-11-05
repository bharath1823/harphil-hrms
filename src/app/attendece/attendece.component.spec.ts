import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeceComponent } from './attendece.component';

describe('AttendeceComponent', () => {
  let component: AttendeceComponent;
  let fixture: ComponentFixture<AttendeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendeceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
