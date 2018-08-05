import { TestBed, inject } from '@angular/core/testing';

import { Carousel3DataService } from './carousel3-data.service';

describe('Carousel3DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Carousel3DataService]
    });
  });

  it('should be created', inject([Carousel3DataService], (service: Carousel3DataService) => {
    expect(service).toBeTruthy();
  }));
});
