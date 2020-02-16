import { Component, OnInit, Input } from '@angular/core';
import { ContainerInfo } from '../../../entities/container.info';

@Component({
  selector: 'app-container-history',
  templateUrl: './container-history.component.html',
  styleUrls: ['./container-history.component.scss']
})
export class ContainerHistoryComponent implements OnInit {

  @Input()
  containerInfo: ContainerInfo;

  public displayedColumns: string[] = ['dateFrom', 'dateTo', 'sourcePort', 'destinationPort', 'sender', 'recipient'];

  constructor() { }

  ngOnInit() {
  }

}
