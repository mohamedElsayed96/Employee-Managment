import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
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

    this.router.navigate(['./'], {relativeTo: this.route , queryParams: searchObj});
    
    
    

  

  }

  onNewEmployee()
  {
    this.router.navigate(['/employees/add']);
  }
  onClear()
  {
    this.form.reset();
  }

}
