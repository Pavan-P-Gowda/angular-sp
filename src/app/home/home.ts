import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { SIGNAL } from '@angular/core/primitives/signals';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homemessage = signal('I am a Full stack Developer');


  KeyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
}
