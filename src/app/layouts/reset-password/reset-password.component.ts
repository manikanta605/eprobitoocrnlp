import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { ConfirmedValidator } from 'src/app/shared/customevalidation/confirmed.validator';
import { PasswordStrengthValidator } from 'src/app/shared/customevalidation/password-strength.validators';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { OrganizationService } from 'src/app/shared/services/organization.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword:FormGroup = new FormGroup({});;
  submitted:boolean = false;
  EmailId:any;
  get form(){
    return this.resetPassword.controls;
  }

  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute, private OrgService:OrganizationService, private toastr:NotificationService, private router:Router,private spinner: NgxSpinnerService) { 
    this.resetPassword= this.fb.group({
      password: [null, [Validators.required,PasswordStrengthValidator]],
      confirm_password: [null, Validators.required]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res)=>{
      this.EmailId = res.email;
      console.log("EmailId",this.EmailId);
    })
  }

  

  setPassword(){
    this.submitted = true;
    this.spinner.show();
    this.OrgService.resetPassword(this.EmailId, this.resetPassword.value).pipe(finalize(() => {
      this.spinner.hide();

    })).subscribe((result:any)=>{
      if(result.statusCode=== 200){
        this.toastr.showSuccess("Successfully", "Password as Changed ");
                this.router.navigate(['/']);
      }
    },
    (error) =>{
      this.toastr.showError('Failed', 'Email Id Not Match Please Contact Administrator');
    })
    
    
  }

}
