import { concatMap, delay, map, Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContainerService } from './container.service';
import { ContainerInfo } from '../../global/entities/container.info';
import { ControlNumberService } from '../../global/services/control.number.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  public serialNumber = '';
  public containerInfo$: Observable<ContainerInfo>;
  public isDataLoading: boolean;

  constructor(
    private readonly containerService: ContainerService,
    private readonly controlNumberService: ControlNumberService
  ) {
  }

  ngOnInit() {
    // this.toastr.setRootViewContainerRef(this.vcf);
  }

  public searchContainerInfo() {
    this.isDataLoading = true;
    this.containerInfo$ = of(null);
    this.containerInfo$ = this.controlNumberService.checkControlNumberForContainer(this.serialNumber).pipe(
      concatMap(result => {
        return this.containerService.getContainerHistory(this.serialNumber);
      }),
      delay(200),
      map(info => {
        this.isDataLoading = false;
        return info;
      })
    );

  }

  public resetNumber() {
    this.serialNumber = '';
    this.containerInfo$ = of(null);
  }

}
