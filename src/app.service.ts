import { Injectable } from '@nestjs/common';
import { CheckLoginDto } from './checkLogin.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getproduct(): any {
    let tshirtobject;
    tshirtobject = {
      TshirtName: "Myntra",
      id: 1,
      country: "Nepal",
      Store: "PK Store"
    }
    return tshirtobject; 
  }

  getusers(): any {
    let studentobject; 
    studentobject = {
      Name: "yojana",
    distruct: "Bagmati"
    } 

    return studentobject; 
  }

  checkLogin(checkLogin:CheckLoginDto):any {
    const nametoCheck = "yojana";
    const usernametoCheck = "yojana"; 
    const passwordtoCheck = "yojana";

    if(nametoCheck == checkLogin.name && usernametoCheck == checkLogin.username && passwordtoCheck == checkLogin.password) {
      return {success: "Name, username and password correct"};
    }  
    else {
      return {success:false}
    }
  } 
}
