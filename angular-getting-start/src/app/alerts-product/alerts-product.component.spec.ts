import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsProductComponent } from './alerts-product.component';

describe('AlertsProductComponent', () => {
  let component: AlertsProductComponent;
  let fixture: ComponentFixture<AlertsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
