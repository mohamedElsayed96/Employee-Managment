import { HttpClient, HttpResponse } from "@angular/common/http";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";

@Injectable()
export class EmployeeService
{
    constructor(private http: HttpClient){}
    PageNumber: number = 0;

    getEmployees(queryParams: {})
    {
        return this.http.get('http://localhost:9091/employees', {observe: 'response' , params: queryParams});
    }
    getEmployee(id : number)
    {
        return this.http.get('http://localhost:9091/employees/' + id, {observe: 'response'});

    }
    addEmployee(employee: Employee)
    {
        return this.http.post('http://localhost:9091/employees', employee, {observe: 'response'})
    }
}