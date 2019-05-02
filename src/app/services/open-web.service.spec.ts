import { TestBed } from '@angular/core/testing';

import { OpenWebService } from './open-web.service';

describe('OpenWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenWebService = TestBed.get(OpenWebService);
    expect(service).toBeTruthy();
  });
});
