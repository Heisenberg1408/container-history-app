import { Component, OnInit } from '@angular/core';
import { ContainerService } from './container.service';
import { ContainerInfo } from '../../entities/container.info';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public serialNumber = '';
  public containerInfo: ContainerInfo;

  constructor(
    private readonly containerService: ContainerService
  ) { }

  ngOnInit() {
  }

  public searchContainerInfo() {
    this.containerService.getContainerHistory(this.serialNumber).subscribe((containerInfo) => {
      this.containerInfo = containerInfo;
    });
  }

  public resetNumber() {
    this.serialNumber = '';
  }

}
