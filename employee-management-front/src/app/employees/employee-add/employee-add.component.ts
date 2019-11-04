import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }
  onAdd()
  {
    console.log(this.form.value);
    this.employeeService.addEmployee(this.form.value).subscribe((data: HttpResponse<any>)=>
    {
      this.router.navigate(['/employees']);
    })
  }
}
