import { Component, OnInit, Input } from '@angular/core';
import { ContainerInfo } from '../../../global/entities/container.info';

@Component({
  selector: 'app-container-history',
  templateUrl: './container-history.component.html',
  styleUrls: ['./container-history.component.scss']
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
