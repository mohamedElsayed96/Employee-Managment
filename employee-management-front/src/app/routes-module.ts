import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeAddComponent } from "./employees/employee-add/employee-add.component";
import { EmployeeDetailComponent } from "./employees/employee-detail/employee-detail.component";

const appRouts: Routes = 
[
    {path: '', redirectTo:'/employees', pathMatch:'full'},
    {path: 'employees/add', component: EmployeeAddComponent},
    {path: 'employees', component: EmployeesComponent, children:
    [
        {path: ':id', component: EmployeeDetailComponent}
    ]},

]
@NgModule(
    {
        imports: 
        [
            RouterModule.forRoot(appRouts)
        ],
        exports:
        [
            RouterModule
        ]
    })
export class AppRoutingModule
{

}