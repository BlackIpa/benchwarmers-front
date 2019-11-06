import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatsComponent } from './stats/stats.component';
import { UsersComponent } from './users/users.component';
import { PreviewComponent } from './preview/preview.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'team', component: StatsComponent },
	{ path: 'users', component: UsersComponent }, 
	{ path: 'preview', component: PreviewComponent }, 
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent }, 
	{ path: 'my-team', component: MyTeamComponent }, 
	{ path: 'profile', component: ProfileComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
