import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { CustomerDetailComponent } from './customer-detail.component';

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ CustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    component.customer = { customerId: 1, name: "Scotty", type: "Large"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render expected Customer ID', () => {
    const fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    component.customer = { customerId: 1, name: "Scotty", type: "Large"};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("[id='customerId']").textContent).toContain('1');
  });

  it('should render expected Customer Name', () => {
    const fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    component.customer = { customerId: 1, name: "Scotty", type: "Large"};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("[id='customerName']").textContent).toContain('Scotty');
  });
  
  it('should render expected Customer Type', () => {
    const fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    component.customer = { customerId: 1, name: "Scotty", type: "Large"};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("[id='customerType']").textContent).toContain('Large');
  });
});
