import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {

  employees : Employee[]  = [];
  queryParams : Params;
  
  constructor(private employeeService: EmployeeService , private router: Router, private route: ActivatedRoute ) { }


  ngOnInit() {
    this.employeeService.getEmployees({}).subscribe(((data : HttpResponse<Employee[]>)=>
    { 
      this.employees = data.body;
      if(this.employees.length > 0){
         const id = this.employees[0].id;
         this.queryParams = {'page_num':this.employeeService.PageNumber, 'page_size': this.employeeService.pageSize };
         this.router.navigate([id], {relativeTo: this.route, queryParams: this.queryParams, queryParamsHandling: 'merge'});
      }
     }))
    var self = this;
    this.route.queryParams.subscribe((queryParams)=>
    {
      console.log(this.route.firstChild);
      

        this.queryParams = queryParams;
        this.employeeService.getEmployees(queryParams).subscribe(((data : HttpResponse<Employee[]>)=>
        { 
          this.employees = data.body;
          if(this.employees.length > 0){
            const id = this.employees[0].id;
            this.router.navigate([id], {relativeTo: this.route, queryParams: this.queryParams});
          }
        }))

    });
    
  }
  ngAfterViewInit() 
  {

  }

  onPageUp()
  {
    this.employeeService.PageNumber++;
    this.router.navigate(['./'],{relativeTo: this.route, queryParams: {'page_num': this.employeeService.PageNumber}, queryParamsHandling:'merge'})
  }
  onPageDown()
  {
    this.employeeService.PageNumber > 0? this.employeeService.PageNumber-- : this.employeeService.PageNumber ;
    this.router.navigate([],{relativeTo: this.route, queryParams: 
      {'page_num': this.employeeService.PageNumber}, queryParamsHandling:'merge'})

  }
  onChangePageSize(page_size: number)
  {
    this.employeeService.pageSize = page_size;
    this.router.navigate([],{relativeTo: this.route, queryParams: 
      {'page_size': this.employeeService.pageSize}, queryParamsHandling:'merge'});
  }

}