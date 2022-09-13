import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { CommonModule } from "@angular/common";
import { OcrscreenComponent } from './ocrscreen/ocrscreen.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
     
    },
    {
      path: 'organization',
      loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule),
     
    },
    {
      path: 'menu',
      loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
     
    },
    {
      path: 'department',
      loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
     
    },
    {
      path:'role',
      loadChildren: ()=>import('./role/role.module').then(m => m.RoleModule),
    },
    {
      path:'user',
      loadChildren:()=>import('./user/user.module').then(m =>m.UserModule)
    },
    {
      path:'ocr',
      component:OcrscreenComponent
    }
    
   
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
