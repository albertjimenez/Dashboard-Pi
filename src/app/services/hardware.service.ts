import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private httpClient: HttpClient) {
  }

  getCPUInfo(): number {
    return 1.0;
  }

  getHDDInfo(): number {
    return 4.2;
  }
}
