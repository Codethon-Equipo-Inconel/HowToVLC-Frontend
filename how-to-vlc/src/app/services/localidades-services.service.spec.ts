import { TestBed } from '@angular/core/testing';

import { LocalidadesServicesService } from './localidades-services.service';

describe('LocalidadesServicesService', () => {
  let service: LocalidadesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalidadesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
