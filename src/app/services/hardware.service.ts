import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CPU_ROUTE, HDD_ROUTE} from '../API';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private httpClient: HttpClient) {
  }

  getCPUInfo(): Observable<Object> {
    return this.httpClient.get(CPU_ROUTE);
  }

  getHDDInfo(): Observable<Object> {
    return this.httpClient.get(HDD_ROUTE);
  }
}
