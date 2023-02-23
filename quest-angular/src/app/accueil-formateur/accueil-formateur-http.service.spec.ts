import { TestBed } from '@angular/core/testing';

import { AccueilFormateurHTTPService } from './accueil-formateur-http.service';

describe('AccueilFormateurHTTPService', () => {
  let service: AccueilFormateurHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccueilFormateurHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
