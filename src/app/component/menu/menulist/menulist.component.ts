import { Component, OnInit } from '@angular/core';
import { MenuModulesService } from 'src/app/shared/services/menu-modules.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  menudata:any;
  constructor(private menuservice:MenuModulesService) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this.menuservice.getModules().subscribe((data:any)=>{

     this.menudata = data.data;
     console.log("this.menudata",this.menudata)
    })
  }
}
