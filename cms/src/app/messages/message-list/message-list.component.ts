import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Message} from '../message.model';
import {MessagesService} from "../messasges.service";
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  //@Output() messageWasSelected = new EventEmitter<Message>();
  messages: Message[] = [
    // new Message(    '1',
    //   'hello',
    //   'hello',
    //   'noelle',
    // ),
    // new Message(
    //   '2',
    //   'hello',
    //   'heyooooooooooollo',
    //   'noelle',
    //
    // ),
    // new Message(
    //   '3',
    //   'helldsgrgo',
    //   'hergsrghello',
    //   'noelle',
    // )
  ];

  constructor(private messagesService: MessagesService) {
  this.messages = this.messagesService.getMessages();
  }

  ngOnInit() {
    this.messagesService.messageChangeEvent.subscribe((messages: Message[]) => {
      this.messages = messages;
    })
  }
  //
  // onAddMessage(message: Message) {
  //   this.messages.push(message);
  // }
  onAddMessage(message: Message){
    this.messages.push(message);
  }
}
