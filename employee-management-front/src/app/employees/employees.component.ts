import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewInit, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
 
  queryParams: Params;
 

  @ViewChild('f') form: NgForm;

  private initialized: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
   
    this.queryParams = this.route.snapshot.queryParams;
    this.route.queryParams.subscribe((params)=>
    {
      this.queryParams = params;
    })
    setTimeout(()=>
    {
      var searchObj : {name: string, hr_code:string, email: string, mobile_number:string} = 
      {name: '', hr_code:'', email:'', mobile_number:''}
      
      for (let index = 0; index < Object.keys(searchObj).length; index++) {
        
        const key = Object.keys(searchObj)[index];
        if(this.queryParams[key])
          searchObj[key]= this.queryParams[key];
       
      }
      this.form.form.patchValue(searchObj);
      this.initialized = true;
    })
    this.form.valueChanges.subscribe((values)=>
    {
      if(this.initialized)
        this.onSubmit();
    })
   
  }

  
  onSubmit()
  {
      const obj = this.form.value
      
      const searchObj = {};
      
      for (let index = 0; index < Object.keys(obj).length; index++) {
        const key = Object.keys(obj)[index];
        if(obj[key] != "")
        {
          searchObj[key]= obj[key];
        }
      }
      this.employeeService.PageNumber = 1;
      searchObj['page_num'] = this.employeeService.PageNumber;
      searchObj['page_size'] = this.employeeService.pageSize;
      this.router.navigate([], {relativeTo: this.route , queryParams: searchObj});
  }

  onNewEmployee()
  {
    this.router.navigate(['/employees/add']);
  }
  onClear()
  {
    this.form.reset();
  }
  onFormChange()
  {
    this.onSubmit();
  }

}
