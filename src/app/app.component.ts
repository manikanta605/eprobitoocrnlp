import { Component, OnInit } from '@angular/core';
import { MenuModulesService } from './shared/services/menu-modules.service';


declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private Modules:MenuModulesService){}
  title = 'customerApplication';
  moduleList:any;
 ngOnInit(){
  


  this.Modules.getModules().subscribe((result: any) => {
    this.moduleList = result.data;
    console.log("ModuleList",this.moduleList);
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
}
