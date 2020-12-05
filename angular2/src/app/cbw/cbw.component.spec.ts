import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbwComponent } from './cbw.component';

describe('CbwComponent', () => {
  let component: CbwComponent;
  let fixture: ComponentFixture<CbwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
