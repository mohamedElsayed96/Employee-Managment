import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component'
import { AppRoutingModule } from './routes-module';
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employees/employee.service';
import { HeaderComponent } from './header/header.component';
import { DropdownDirectiveDirective } from './Shared/dropdown-directive.directive';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the moduleimport {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    HeaderComponent,
    DropdownDirectiveDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
