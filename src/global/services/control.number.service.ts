import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { CharNumberCode } from '../enums/char.numer.code';
import { Observable } from 'rxjs/Observable';
import { map, reduce } from 'rxjs/operators';

@Injectable()
export class ControlNumberService {

  constructor() {}

  public checkControlNumberForContainer(serialNumber: string): Observable<boolean> {
    return from(serialNumber.substring(0, serialNumber.length - 1))
          .pipe(
            map((symbol) => (+symbol || +symbol === 0) ? +symbol : CharNumberCode[symbol]),
            map((numberCode, index) => numberCode * Math.pow(2, index)),
            reduce((sum, number) => sum + number),
            map((number) => (number % 11 === 0 || number % 11 === 10) ? 0 : number % 11),
            map((result) => result === +serialNumber[serialNumber.length - 1])
          );
  }
}
