import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { LogininfoService } from 'src/app/shared/services/logininfo.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginForm: FormGroup;
  loginData: FormGroup;
  

  constructor(private fb:FormBuilder,private _loginServices:LoginService, private router:Router, private LoginInfo:LogininfoService, private toaster:NotificationService) {
    this.loginData = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
     // phone:['', Validators.required],
    })
   }
  
  ngOnInit(): void {
  }
  onSubmit() {
    console.log("login form", this.loginData.value);

    let data = {
      username: 'admin',
      password: 'admin'
    }
    console.log("data", data);
    if(this.loginData.value.username == 'admin' && this.loginData.value.password == 'admin@123'){
      
      localStorage.setItem('username', this.loginData.value.username);
      localStorage.setItem('role', "admin");
      localStorage.setItem('org_id', "0");
      this.router.navigate(['/']);
    }else{
      
      this.toaster.showError("Error", "Enter Valid Detials!");
    }

    // if () {
    //   let userInfo = res.data[0];
    //   console.log("userInfo", userInfo);
    //   localStorage.setItem('username', userInfo.username);
    //   if (userInfo.org_id === '0') {
    //     localStorage.setItem('role', "admin");
    //     localStorage.setItem('org_id', "0");
    //   }
    //   else {
    //     this.LoginInfo.accessToken = 'user';
    //     localStorage.setItem('role', JSON.stringify("user"));
    //     //localStorage.setItem('userData',JSON.stringify(res.data));
    //     localStorage.setItem('org_id', userInfo.org_id);
    //   }
    //   this.router.navigate(['/']);
    // }else{
    //   this.toaster.showError("Error", "Enter Valid Detials!");
    // }

    // this._loginServices.validateUser(data).subscribe((res: any) => {
    //     console.log("res Testing",res.data[0]);
    //   if (res.statusCode == 200) {
    //     let userInfo = res.data[0];
    //     console.log("userInfo", userInfo);
    //     localStorage.setItem('username', userInfo.username);
    //     if (userInfo.org_id === '0') {
    //       localStorage.setItem('role', "admin");
    //       localStorage.setItem('org_id', "0");
    //     }
    //     else {
    //       this.LoginInfo.accessToken = 'user';
    //       localStorage.setItem('role', JSON.stringify("user"));
    //       //localStorage.setItem('userData',JSON.stringify(res.data));
    //       localStorage.setItem('org_id', userInfo.org_id);
    //     }
    //     this.router.navigate(['/']);
    //   }else{
    //     this.toaster.showError("Error", "Enter Valid Detials!");
    //   }
    // });
  }
}
