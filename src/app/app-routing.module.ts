import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { TwopageComponent } from './twopage/twopage.component';
import { SignupComponent } from './user/signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobComponent } from './job/job.component';
import { UnderconsComponent } from './undercons/undercons.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent},
  { path:'ourservice', component: TwopageComponent},
  { path:'signup', component: SignupComponent},
  { path:'job', component: JobComponent},
  { path:'blog', component: UnderconsComponent},
  { path:'contactus', component: ContactusComponent},
  { path:'events', component: EventsComponent},
  { path:'edu', component: UnderconsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
