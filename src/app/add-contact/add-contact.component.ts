import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;

  constructor() {
  }

  ngOnInit() {
  }

  onAddToContactList(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.contact = new Contact(form.value.firstName, form.value.lastName, form.value.phoneNumber);
    console.log(this.contact);
  }

}
