import { TestBed } from '@angular/core/testing';

import { ProducedServicesService } from './produced-services.service';

describe('ProducedServicesService', () => {
  let service: ProducedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
