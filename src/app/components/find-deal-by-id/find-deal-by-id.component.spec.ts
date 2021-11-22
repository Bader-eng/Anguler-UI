import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDealByIdComponent } from './find-deal-by-id.component';

describe('FindDealByIdComponent', () => {
  let component: FindDealByIdComponent;
  let fixture: ComponentFixture<FindDealByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDealByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDealByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
