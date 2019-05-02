import { TestBed } from '@angular/core/testing';

import { OpenAppService } from './open-app.service';

describe('OpenAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenAppService = TestBed.get(OpenAppService);
    expect(service).toBeTruthy();
  });
});
