import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  contactId: string;
  contact: Contact;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.contactId = paramMap.get('id');
      this.contactService.getContact(this.contactId).subscribe(result => {
        this.contact = result.contact;
      });
    });
  }

}
