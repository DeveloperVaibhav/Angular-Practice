import { TestBed } from '@angular/core/testing';

import { Guard3Service } from './guard3.service';

describe('Guard3Service', () => {
  let service: Guard3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guard3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
