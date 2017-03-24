import { TestBed, inject } from '@angular/core/testing';

import { ParameterizedApiService } from './parameterized-api.service';

describe('ParameterizedApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParameterizedApiService]
    });
  });

  it('should ...', inject([ParameterizedApiService], (service: ParameterizedApiService) => {
    expect(service).toBeTruthy();
  }));
});
