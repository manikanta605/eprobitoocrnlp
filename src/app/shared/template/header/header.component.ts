import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/login/auth.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
      this.auth.logOut();
  }

}
