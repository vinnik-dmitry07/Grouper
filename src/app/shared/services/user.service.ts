import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseResponse } from "../models/base-response";
import { UserModel } from "../models/user";

@Injectable()
export class UserService{
    constructor(private http:HttpClient){}
    
    signUp(user:UserModel):Observable<BaseResponse>{
        let url = environment.user.signUp;

        const body={
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            role:user.role
        };
        
        let headers=new HttpHeaders({
            "Content-Type": "application/json"
        });
        let options={headers:headers};

        return this.http.post<BaseResponse>(url, body, options);
    }
}