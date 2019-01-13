import {Contact} from './contact';

export class Message {
  _id: string;

  constructor(public OTP: number, public recipient: Contact, public date: Date) {
  }
}
