import { TestBed } from '@angular/core/testing';

import { CostcalculationServicesService } from './costcalculation-services.service';

describe('CostcalculationServicesService', () => {
  let service: CostcalculationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostcalculationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
