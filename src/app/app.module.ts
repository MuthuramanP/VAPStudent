import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { Banner1Component } from './banner1/banner1.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { EventsComponent } from './events/events.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { TwopageComponent } from './twopage/twopage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobComponent } from './job/job.component';
import { UnderconsComponent } from './undercons/undercons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    FeaturesComponent,
    Banner1Component,
    TestimonialComponent,
    EventsComponent,
    OurserviceComponent,
    TwopageComponent,
    AboutusComponent,
    HomeComponent,
    SignupComponent,
    BlogComponent,
    ContactusComponent,
    JobComponent,
    UnderconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
    SliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
