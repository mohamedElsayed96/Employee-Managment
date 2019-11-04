import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

   employee: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.getEmployee(id);

    this.route.params.subscribe((params: Params)=>
    {
       this.getEmployee(+params['id']);

    })
    

  }

  getEmployee(id: number)
  {
    this.employeeService.getEmployee(id).subscribe((data: HttpResponse<Employee>) =>
    {
      this.employee = data.body;
    });
  }

}
