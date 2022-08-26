import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DealerComponent } from './dealer/dealer.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['ROLE_ADMIN']} },
  { path: 'farmer', component: FarmerComponent ,  canActivate:[AuthGuard], data:{roles:['ROLE_FARMER']} },
  { path: 'dealer', component: DealerComponent ,  canActivate:[AuthGuard], data:{roles:['ROLE_DEALER']} },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
