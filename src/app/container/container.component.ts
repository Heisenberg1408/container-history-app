import { Component, OnInit } from '@angular/core';
import { ContainerService } from './container.service';
import { ContainerInfo } from '../../global/entities/container.info';
import { ControlNumberService } from '../../global/services/control.number.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public serialNumber = '';
  public containerInfo: ContainerInfo = null;
  public isDataLoading: boolean;

  constructor(
    private readonly containerService: ContainerService,
    private readonly controlNumberService: ControlNumberService,
    private readonly toastService: ToastrService,
  ) { }

  ngOnInit() {
  }

  public searchContainerInfo() {
    this.controlNumberService.checkControlNumberForContainer(this.serialNumber).subscribe((result) => {
      if (result) {
        this.isDataLoading = true;
        this.containerInfo = null;
        this.containerService.getContainerHistory(this.serialNumber).subscribe((containerInfo) => {
          this.containerInfo = containerInfo;
          this.isDataLoading = false;
        });
      } else {
        this.toastService.error('Incorrect container number!!', 'Error', {
          // tapToDismiss: false
        });
      }
    });

  }

  public resetNumber() {
    this.serialNumber = '';
  }

}
