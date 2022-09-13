import { Component, OnInit } from '@angular/core';
import { MenuModulesService } from 'src/app/shared/services/menu-modules.service';

@Component({
  selector: 'app-submenulist',
  templateUrl: './submenulist.component.html',
  styleUrls: ['./submenulist.component.css']
})
export class SubmenulistComponent implements OnInit {
  submenudata:any;
  constructor(private menuservice:MenuModulesService) { }

  ngOnInit(): void {
    this.getSubmenu();
  }

  getSubmenu(){
    this.menuservice.getSubmenu().subscribe((result:any)=>{
      this.submenudata = result.data;
    })
  }

}
