import {Component, OnInit} from '@angular/core';
import {Message} from '../models/message';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.onGetMessages().subscribe(result => {
      this.messages = this.messageService.sortMessages(result.messages);
    });
  }

  // onLong press delete messages

  onDelete(id: string) {
    this.messageService.deleteMessage(id).subscribe(() => {
      this.messages = this.messages.filter(message => message._id !== id);
    });
  }
}
