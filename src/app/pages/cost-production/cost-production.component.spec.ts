import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostProductionComponent } from './cost-production.component';

describe('CostProductionComponent', () => {
  let component: CostProductionComponent;
  let fixture: ComponentFixture<CostProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
