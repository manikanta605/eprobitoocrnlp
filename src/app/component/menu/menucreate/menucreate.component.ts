import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuModulesService } from 'src/app/shared/services/menu-modules.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-menucreate',
  templateUrl: './menucreate.component.html',
  styleUrls: ['./menucreate.component.css']
})
export class MenucreateComponent implements OnInit {
  submitted:boolean = false;
  subMenudata:FormGroup
  constructor(private menuservice:MenuModulesService, private fb:FormBuilder, private toastr:NotificationService, private router:Router) {
    this.subMenudata = this.fb.group({
      name:['', [Validators.required]],
      url:['', [Validators.required]]
    })
   }

get form(){
 return this.subMenudata.controls;
}

  ngOnInit(): void {
  }

  submitData(){
    console.log(this.subMenudata.value);
    this.menuservice.createMenu(this.subMenudata.value).subscribe((result:any)=>{
      if(result.statusCode=== 200){
        console.log("result",result);
        this.toastr.showSuccess("Successfully", "Successfully Create");
        this.router.navigate(['/menu']);
      }else{
        this.toastr.showError('Failed', "Please Try Again Later");
      }
    })
  }
}
