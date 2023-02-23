import { TestBed } from '@angular/core/testing';

import { MatiereHTTPService } from './matiere-http.service';

describe('MatiereHTTPService', () => {
  let service: MatiereHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatiereHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
