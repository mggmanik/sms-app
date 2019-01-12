import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddContactComponent} from './add-contact/add-contact.component';
import {ViewContactsComponent} from './view-contacts/view-contacts.component';

const routes: Routes = [
  {path: '', redirectTo: 'view-contacts', pathMatch: 'full'},
  {path: 'view-contacts', component: ViewContactsComponent},
  {path: 'add-contact', component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
