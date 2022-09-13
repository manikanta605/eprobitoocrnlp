import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Sidebar, SidebarModule } from 'ng-sidebar';
import { CommonLauoutComponent } from './layouts/common-lauout/common-lauout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { HeaderComponent } from './shared/template/header/header.component';
import { SideNavComponent } from './shared/template/side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './layouts/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './layouts/forgot-password/forgot-password.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PagenotfoundComponent } from './layouts/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonLauoutComponent,
    FullLayoutComponent,
    HeaderComponent,
    SideNavComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
