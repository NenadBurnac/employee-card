import { calcPossibleSecurityContexts } from "@angular/compiler/src/template_parser/binding_parser";


export interface EmployeeModelType {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    salary: string;
}

export class EmployeeModel {
   public id?: number;
   public firstName: string = "";
   public lastName: string = "";
   public email: string = "";
   public mobile: string = "";
   public salary: string = "";
}