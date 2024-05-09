import { TestBed } from '@angular/core/testing';

import { ConexionBbddService } from './conexion-bbdd.service';

describe('ConexionBbddService', () => {
  let service: ConexionBbddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionBbddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
