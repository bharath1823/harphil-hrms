import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbImgComponent } from './db-img.component';

describe('DbImgComponent', () => {
  let component: DbImgComponent;
  let fixture: ComponentFixture<DbImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
