import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Message} from '../message.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() messageWasSelected = new EventEmitter<Message>();
  messages: Message[] = [
    new Message(    '1',
      'hello',
      'hello',
      'noelle',
    ),
    new Message(
      '2',
      'hello',
      'heyooooooooooollo',
      'noelle',

    ),
    new Message(
      '3',
      'helldsgrgo',
      'hergsrghello',
      'noelle',
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
