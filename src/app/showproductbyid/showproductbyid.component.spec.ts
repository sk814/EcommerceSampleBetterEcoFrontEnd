import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductbyidComponent } from './showproductbyid.component';

describe('ShowproductbyidComponent', () => {
  let component: ShowproductbyidComponent;
  let fixture: ComponentFixture<ShowproductbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowproductbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowproductbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
