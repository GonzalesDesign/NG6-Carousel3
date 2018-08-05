import { TestBed, inject } from '@angular/core/testing';

import { Carousel3SliderService } from './carousel3-slider.service';

describe('Carousel3SliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Carousel3SliderService]
    });
  });

  it('should be created', inject([Carousel3SliderService], (service: Carousel3SliderService) => {
    expect(service).toBeTruthy();
  }));
});
