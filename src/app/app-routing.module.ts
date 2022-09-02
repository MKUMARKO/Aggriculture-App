import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DealerProfileComponent } from './dealer-profile/dealer-profile.component';
import { DealerComponent } from './dealer/dealer.component';
import { FarmerProfileComponent } from './farmer-profile/farmer-profile.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['ROLE_ADMIN']} },
  { path: 'farmer', component: FarmerComponent ,  canActivate:[AuthGuard], data:{roles:['ROLE_FARMER']} },
  { path: 'dealer', component: DealerComponent ,  canActivate:[AuthGuard], data:{roles:['ROLE_DEALER']} },
  
 
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuard] , data:{roles:['ROLE_ADMIN']}},
  { path: 'farmerprofile', component: FarmerProfileComponent ,canActivate:[AuthGuard] , data:{roles:['ROLE_FARMER']}},
  { path: 'dealerprofile', component: DealerProfileComponent ,canActivate:[AuthGuard] , data:{roles:['ROLE_DEALER']}},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
