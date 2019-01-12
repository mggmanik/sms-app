import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AngularMaterialModule} from './angular-material.module';
import {AddContactComponent} from './add-contact/add-contact.component';
import {FormsModule} from '@angular/forms';
import {ViewContactsComponent} from './view-contacts/view-contacts.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddContactComponent,
    ViewContactsComponent,
    ContactInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
