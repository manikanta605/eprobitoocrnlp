import { Component, OnInit } from '@angular/core';
import { MenuModulesService } from '../../services/menu-modules.service';
import { OrganizationService } from '../../services/organization.service';
declare var $ : any;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  Role: any;
  org_id:any
  menudataList:any;
  menuModuleList:any;
  mainMenu:any;
  FinalMenuList:any;
  
  constructor(private orgService:OrganizationService, private menuService:MenuModulesService) { }

  ngOnInit(): void {
    this.Role = window.localStorage.getItem('role');
    this.org_id = window.localStorage.getItem('org_id');
    this.orgService.getOrgidwiseData(this.org_id).subscribe((data:any)=>{
      this.menudataList =  data.data;
        const menuModule= this.menudataList[0].module;
        this.menuModuleList = menuModule.split(",").map(Number);
        this.menuModuleList = this.menuModuleList.map((item:any) => ({ id:item }));
        console.log("menudataList", this.menuModuleList);
    })

    this.menuService.getModules().subscribe((data:any)=>{
      this.mainMenu = data.data;
      console.log("mainMenu", this.mainMenu);
      let result =  this.menuModuleList.map((x:any, item:any) => {
        item = this.mainMenu.find((obj:any) => { return  obj.id === x.id });
        if (item) { 
          return item;
        }      
      })
      this.FinalMenuList = result
      console.log("result", result);
    })

   
  }

  ngAfterViewInit():any{
    //$("body").removeClass("fullscreen-enable");

    $("#side-menu").metisMenu();
    $("#vertical-menu-btn").on("click", function(e:any) { 
      e.preventDefault(),
       $("body").toggleClass("sidebar-enable"), 992 <= $(window).width() ? $("body").toggleClass("vertical-collpsed") : $("body").removeClass("vertical-collpsed") 
      })
      $(document).ready(function() {
        var e;
        0 < $("#sidebar-menu").length && 0 < $("#sidebar-menu .mm-active .active").length && (300 < (e = $("#sidebar-menu .mm-active .active").offset().top) && (e -= 300, $(".vertical-menu .simplebar-content-wrapper").animate({ scrollTop: e }, "slow")))
    })
      
    }
    
getMenuData(){
  console.log("menudataList", this.menuModuleList);
  console.log("mainMenu", this.mainMenu);
}



}
