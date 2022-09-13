import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { OrganizationService } from 'src/app/shared/services/organization.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword:FormGroup;
  submitted:boolean = false;
  Msg:any;
  constructor(private fb:FormBuilder, private orgService:OrganizationService, private toastr:NotificationService, private router:Router,private spinner: NgxSpinnerService) { 
    this.forgotPassword = this.fb.group({
      username:['', Validators.required],
    })
  }


  get form(){
    return this.forgotPassword.controls;
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.spinner.show();
    this.orgService.fotgotPassword(this.forgotPassword.value).pipe(finalize(() => {
      this.spinner.hide();

    })).subscribe((result:any)=>{
      if(result.statusCode == 200){
        this.Msg = "Forgot Password link sent on registerd Email";
        this.toastr.showSuccess("Successfully", "Forgot Password link sent on registerd Email");
        this.forgotPassword.reset();
        //this.router.navigate(['/']);
      }
     
    })
    console.log(this.forgotPassword.value);
  }

}
