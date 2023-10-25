import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Serviço de mensagens globais do sistema
 * 
 * @author Bruno Carneiro (TR30165)
 */
@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {

  private globalMessageSubject = new Subject<Message>();
  
  globalMessage$ = this.globalMessageSubject.asObservable();

  displayMessage(message: Message) {
    this.globalMessageSubject.next({...message, visible: true});
  }
  
  hideMessage(message: Message) {
    this.globalMessageSubject.next({...message, visible: false});
  }

  constructor() { }
}

type Message = {
  type: string, 
  text: string, 
  icon?: string,
  visible?: boolean
}