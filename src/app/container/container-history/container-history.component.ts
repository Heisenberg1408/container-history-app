import { Component, OnInit, Input } from '@angular/core';
import { ContainerInfo } from '../../../entities/container.info';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-container-history',
  templateUrl: './container-history.component.html',
  styleUrls: ['./container-history.component.scss']
})
export class ContainerHistoryComponent implements OnInit {

  @Input()
  containerInfo: ContainerInfo;

  public columnsDef: TableColumn[] = new Array();

  constructor() {
    this.columnsDef = [
      {prop: 'dateFrom', name: 'Дата отправления', width: 100, sortable: false},
      {prop: 'dateTo', name: 'Дата прибытия', width: 100, sortable: false},
      {prop: 'sourcePort', name: 'Порт отправления', width: 100, sortable: false},
      {prop: 'destinationPort', name: 'Порт прибытия', width: 100, sortable: false},
      {prop: 'sender', name: 'Отправитель', width: 100, sortable: false},
      {prop: 'recipient', name: 'Получатель', width: 100, sortable: false}
    ]
   }

  ngOnInit() {
  }

}
