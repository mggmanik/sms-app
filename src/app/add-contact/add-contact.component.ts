import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contact} from '../models/contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  onAddToContactList(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const now = new Date();
    this.contact = new Contact(form.value.firstName, form.value.lastName, form.value.phoneNumber, now);
    this.contactService.onAddContacts(this.contact).subscribe();
    form.resetForm();
  }

}
