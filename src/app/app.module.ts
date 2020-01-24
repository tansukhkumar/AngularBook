import { ArtistserviceService } from './artistservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule , rougtingComponants } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserprofilepostComponent } from './userprofilepost/userprofilepost.component';
import { BookartistfilterComponent } from './bookartistfilter/bookartistfilter.component';
import { ArtistsearchComponent } from './artistsearch/artistsearch.component';
import { ArtistprofileComponent } from './artistprofile/artistprofile.component';
import { ArtistcategoryComponent } from './artistcategory/artistcategory.component';
import { ApplicationworkingComponent } from './applicationworking/applicationworking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    rougtingComponants,
    HomeComponent,
    UserprofileComponent,
    UserprofilepostComponent,
    BookartistfilterComponent,
    ArtistsearchComponent,
    ArtistprofileComponent,
    ArtistcategoryComponent,
    ApplicationworkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArtistserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
