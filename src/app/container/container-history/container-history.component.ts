import { animate, animateChild, group, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContainerInfo } from '../../../global/entities/container.info';

@Component({
  selector: 'app-container-history',
  templateUrl: './container-history.component.html',
  styleUrls: ['./container-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [

        group([
          query('.row p', [
            style({ opacity: 0}),
            animate(500, style({opacity: 1}))
          ]),
          query('thead tr, tbody tr', stagger(50, animateChild()))
        ]),
      ]),
      // transition(':leave', [
      //   style({ opacity: 1}),
      //   animate(200, style({opacity: 0}))
      // ])
    ]),
    trigger('animateRows', [
      transition(':enter', [
        style({ transform: 'translateY(-200px)', opacity: 0}),
        animate(500, style({transform: 'translateY(0)', opacity: 1}))
      ]),
    ])
  ]
})
export class ContainerHistoryComponent implements OnInit {

  @Input()
  serialNumber: string;
  @Input()
  containerInfo: ContainerInfo;
  @Input()
  isDataLoading: boolean;

  constructor() {}

  ngOnInit() {
  }

}
