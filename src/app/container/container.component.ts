import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContainerService } from './container.service';
import { ContainerInfo } from '../../global/entities/container.info';
import { ControlNumberService } from '../../global/services/control.number.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    private readonly toastr: ToastsManager,
    private readonly vcf: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.toastr.setRootViewContainerRef(this.vcf);
  }

  public searchContainerInfo() {
    this.controlNumberService.checkControlNumberForContainer(this.serialNumber).subscribe((result) => {
      this.containerInfo = null;
      if (result) {
        this.isDataLoading = true;
        this.containerService.getContainerHistory(this.serialNumber).subscribe((containerInfo) => {
          this.containerInfo = containerInfo;
          this.isDataLoading = false;
        });
      } else {
        this.toastr.error('Неправильно введенный маркировочный номер', 'Ошибка');
      }
    });

  }

  public resetNumber() {
    this.serialNumber = '';
  }

}
