import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshbourdComponent } from './darshbourd.component';

describe('DarshbourdComponent', () => {
  let component: DarshbourdComponent;
  let fixture: ComponentFixture<DarshbourdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshbourdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshbourdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
