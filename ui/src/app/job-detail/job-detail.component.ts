import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { JobModel } from '../models/job.model';
import { CustomerService } from '../services/customer.service';
import { CustomerModel } from '../models/customer.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  private jobId: number;

  public customers: CustomerModel[] = [];

  public job: JobModel;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private customerService: CustomerService) {
      this.jobId = route.snapshot.params.id;
    }

  ngOnInit() {
    this.jobService.GetJob(this.jobId).subscribe(job => this.job = job);
    this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
  }

  public getCustomerName(customerId: number): string {

    var result: CustomerModel = this.customers.find(x => x.customerId == customerId);
    if (result == undefined) {
      return "Unknown";
    } else {
      return result.name;
    }
  }
  
  public getCustomerType(customerId: number): string {

    var result: CustomerModel = this.customers.find(x => x.customerId == customerId);
    if (result == undefined) {
      return "Unknown";
    } else {
      return result.type;
    }
  }
}
