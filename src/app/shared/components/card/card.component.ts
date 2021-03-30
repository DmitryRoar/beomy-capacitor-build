import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {ICardInfo} from '../../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() card: ICardInfo | undefined;

  constructor() {
  }
}
