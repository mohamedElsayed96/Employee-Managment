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
    this.queryParams = this.route.snapshot.queryParams;

    this.employeeService.getEmployees(this.queryParams).subscribe(((data : HttpResponse<Employee[]>)=>
    { 
      this.employees = data.body;
      if(this.employees.length > 0){
         const id = this.employees[0].id;
         if(!this.queryParams['page_num'])
            this.queryParams['page_num'] = this.employeeService.PageNumber;
         if(!this.queryParams['page_size'])
            this.queryParams['page_size'] = this.employeeService.pageSize ;
         this.router.navigate([id], {relativeTo: this.route, queryParams: this.queryParams, queryParamsHandling: 'merge'});
      }
     }))
  
    this.route.queryParams.subscribe((queryParams)=>
    {
      

        this.queryParams = queryParams;
        this.employeeService.getEmployees(queryParams).subscribe(((data : HttpResponse<any[]>)=>
        { 
          this.employees = data.body['content'];
          const total :number = +data.headers.get('size');
          this.employeeService.resultCount = data.body['totalElements'];
          console.log(data.headers);
          if(this.employees.length > 0){
            const id = this.employees[0].id;
            this.router.navigate([id], {relativeTo: this.route, queryParams: this.queryParams});
          }
          else
          {
            this.router.navigate(['/employees'], {relativeTo: this.route, queryParams: this.queryParams});
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
    this.router.navigate([],{relativeTo: this.route, queryParams: {'page_num': this.employeeService.PageNumber}, queryParamsHandling:'merge'})
  }
  onPageDown()
  {
    this.employeeService.PageNumber > 0? this.employeeService.PageNumber-- : this.employeeService.PageNumber ;
    this.router.navigate([],{relativeTo: this.route, queryParams: 
      {'page_num': this.employeeService.PageNumber}, queryParamsHandling:'merge'})

  }
  onChangePageSize(event: number)
  {
    
    this.employeeService.PageNumber = event;
    this.router.navigate([],{ relativeTo: this.route, queryParams: 
      {'page_num': this.employeeService.PageNumber}, queryParamsHandling:'merge'});
  }

}
