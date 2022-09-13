import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/shared/services/organization.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
 
  OrgList:any;

  
  constructor(private orgService:OrganizationService, private router: Router) { }

  ngOnInit(): void {
    this.getOrgList();
  }

  getOrgList(){
    this.orgService.getData().subscribe((data:any)=>{
      this.OrgList = data.data;
    })
  }
  rowEditData(id:any){
    // this._dataServices.editStructureData(id).subscribe((result:any)=>{ });
     this.router.navigate(['organization/create',id]);
  }

}
