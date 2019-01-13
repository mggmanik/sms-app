import {Component, OnInit} from '@angular/core';
import {Message} from '../models/message';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../models/contact';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  contactId: string;
  contact: Contact;
  message: Message;
  OTP = Math.floor(100000 + Math.random() * 900000);

  constructor(private contactService: ContactService, private messageService: MessageService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.contactId = paramMap.get('id');
      this.contactService.getContact(this.contactId).subscribe(result => {
        this.contact = result.contact;
        const now = new Date();
        this.message = new Message(this.OTP, this.contact, now);
      });
    });
  }

  onSendMessage() {
    this.messageService.onSendMessage(this.message).subscribe(() => {
      this.router.navigate(['/view-contacts']);
    });
  }

}
