import { Component, OnInit } from '@angular/core';
import { LogininfoService } from 'src/app/shared/services/logininfo.service';
import { MenuModulesService } from 'src/app/shared/services/menu-modules.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userRole:string = '';
  moduleList:any
  constructor(private LoginInfo:LogininfoService,private modules:MenuModulesService) { }

  ngOnInit(): void {
    this.userRole = this.LoginInfo.accessToken;
    console.log(this.userRole);

  }

}
