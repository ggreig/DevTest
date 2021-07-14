import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EngineerService } from '../services/engineer.service';
import { JobService } from '../services/job.service';
import { JobModel } from '../models/job.model';
import { CustomerService } from '../services/customer.service';
import { CustomerModel } from '../models/customer.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public customers: CustomerModel[] = [];
  public engineers: string[] = [];

  public jobs: JobModel[] = [];

  public newJob: JobModel = {
    jobId: null,
    customerId: null,
    engineer: null,
    when: null
  };

  constructor(
    private customerService: CustomerService,
    private engineerService: EngineerService,
    private jobService: JobService) { }

  ngOnInit() {
    this.customerService.GetCustomers().subscribe(customers => this.customers = customers);
    this.engineerService.GetEngineers().subscribe(engineers => this.engineers = engineers);
    this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
  }

  public getCustomerName(customerId: number): string {

    var result: CustomerModel = this.customers.find(x => x.customerId == customerId);
    if (result == undefined) {
      return "Unknown";
    } else {
      return result.name;
    }
  }

  public createJob(form: NgForm): void {
    if (form.invalid) {
      alert('form is not valid');
    } else {
      this.jobService.CreateJob(this.newJob).then(() => {
        this.jobService.GetJobs().subscribe(jobs => this.jobs = jobs);
      });
    }
  }

}
