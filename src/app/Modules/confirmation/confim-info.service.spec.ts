import { TestBed } from '@angular/core/testing';

import { ConfimInfoService } from './confim-info.service';

describe('ConfimInfoService', () => {
  let service: ConfimInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfimInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
