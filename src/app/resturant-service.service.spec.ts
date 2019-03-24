import { TestBed } from '@angular/core/testing';

import { ResturantServiceService } from './resturant-service.service';

describe('ResturantServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResturantServiceService = TestBed.get(ResturantServiceService);
    expect(service).toBeTruthy();
  });
});
