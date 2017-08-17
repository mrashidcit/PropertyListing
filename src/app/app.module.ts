import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { FirebaseService } from './services/firebase.service';

export const firebaseConfig = {
    apiKey: "AIzaSyChaVc3YHTFjI3izZ9AvzMZufzYujH3dF0",
    authDomain: "proplistings-55b0f.firebaseapp.com",
    databaseURL: "https://proplistings-55b0f.firebaseio.com",
    projectId: "proplistings-55b0f",
    storageBucket: "proplistings-55b0f.appspot.com",
    messagingSenderId: "302174688796"
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingsComponent},
  {path:'add-listing', component:AddListingComponent},


]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
