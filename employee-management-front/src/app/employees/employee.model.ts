export class Employee
{
    id: number;
    name: string;
    hr_code: string;
    mobile_number: string;
    email: string;
    constructor(id: number, name: string, hr_code: string, mobile_number: string, email: string )
    {
        this.id = id;
        this.mobile_number = mobile_number;
        this.name = name;
        this.email = email;
        this.hr_code = hr_code;
    }
}