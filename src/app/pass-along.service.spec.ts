import { TestBed } from '@angular/core/testing';

import { PassAlongService } from './pass-along.service';

describe('PassAlongService', () => {
  let service: PassAlongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassAlongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
