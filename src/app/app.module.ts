import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { PreviewComponent } from './preview/preview.component';
import { UsersComponent } from './users/users.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ListComponent } from './preview/list/list.component';
import { ViewComponent } from './preview/view/view.component';
import { TeamService } from './services/team.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    StatsComponent,
    PreviewComponent,
    UsersComponent,
    MyTeamComponent,
    ProfileComponent,
    SidenavComponent,
		ToolbarComponent,
		LoginComponent,
		SignupComponent,
		ListComponent,
		ViewComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		HttpClientModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
