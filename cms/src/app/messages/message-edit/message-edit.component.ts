import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { Message } from '../message.model';
@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
@ViewChild ('subjectInput') subjectInputRef: ElementRef;
@ViewChild ('msgTextInput') msgTextInputRef: ElementRef;
@Output() addMessageEvent = new EventEmitter<Message>();
currentSender = 'Noelle Rogers';
  constructor() { }

  ngOnInit() {
  }
onSendMessage(){
    const getSubject = this.subjectInputRef.nativeElement.value;
    const getMessage = this.msgTextInputRef.nativeElement.value;
    const senderName = this.currentSender;
    const newMessage = new Message(null, getSubject, getMessage, senderName);
    this.addMessageEvent.emit(newMessage);
}
onClear(){
  this.subjectInputRef.nativeElement.value=null;
  this.msgTextInputRef.nativeElement.value=null;

}}