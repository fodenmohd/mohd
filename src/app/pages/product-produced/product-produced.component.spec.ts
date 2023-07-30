import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProducedComponent } from './product-produced.component';

describe('ProductProducedComponent', () => {
  let component: ProductProducedComponent;
  let fixture: ComponentFixture<ProductProducedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductProducedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductProducedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
