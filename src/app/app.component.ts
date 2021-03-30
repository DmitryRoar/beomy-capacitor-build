import {Component, OnInit} from '@angular/core';

import {ICardInfo} from './shared/interfaces/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  card: ICardInfo = {
    img: 'assets/img/card/student-photo.png',
    lastLesson: '54:00',
    color: 'blue',
    subject: 'english',
    name: 'Garry Roar',
    nextLesson: {
      date: '16.09.20',
      time: '12:10'
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
