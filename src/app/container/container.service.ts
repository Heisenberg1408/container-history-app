import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ContainerInfo } from '../../global/entities/container.info';

@Injectable()
export class ContainerService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getContainerHistory(serialNumber: string): Observable<ContainerInfo> {
    return this.httpClient.get(`http://www.mocky.io/v2/5ddbad8a3400005200eadd4a?numer=${serialNumber}`)
    .pipe(map((data: any) => {
      return new ContainerInfo(
        data.id,
        data.owner,
        data.history
      );
    }));
  }

}
