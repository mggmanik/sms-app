import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AngularMaterialModule} from './angular-material.module';
import {AddContactComponent} from './add-contact/add-contact.component';
import {FormsModule} from '@angular/forms';
import {ViewContactsComponent} from './view-contacts/view-contacts.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SendMessageComponent} from './send-message/send-message.component';
import {ListMessagesComponent} from './list-messages/list-messages.component';
import {ErrorComponent} from './error/error.component';
import {ErrorInterceptor} from './error/error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddContactComponent,
    ViewContactsComponent,
    ContactInfoComponent,
    SendMessageComponent,
    ListMessagesComponent,
    ErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {
}
