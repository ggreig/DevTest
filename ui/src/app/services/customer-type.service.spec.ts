import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { CustomerTypeService } from './customer-type.service';

describe('CustomerTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: CustomerTypeService = TestBed.get(CustomerTypeService);
    expect(service).toBeTruthy();
  });
});
