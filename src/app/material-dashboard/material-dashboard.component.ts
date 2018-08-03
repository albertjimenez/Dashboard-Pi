import {Component, OnInit} from '@angular/core';
import {HardwareService} from '../services/hardware.service';
import {GitService, PushEventData} from '../services/git.service';

@Component({
  selector: 'app-material-dashboard',
  templateUrl: './material-dashboard.component.html',
  styleUrls: ['./material-dashboard.component.css'],
  providers: [HardwareService, GitService]
})
export class MaterialDashboardComponent implements OnInit {
  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '75.5': {color: 'red'}
  };

  cpuInfo = 0;
  maxSpace = 0;
  currentSpace = 0;
  pushEventData: PushEventData = null;

  constructor(private hardwareService: HardwareService, private gitService: GitService) {
  }

  ngOnInit() {
    this.reloadCPU(); // TODO setInterval
    this.reloadHDD();
    this.pushEventData = this.gitService.getLastPushUpdate();
  }

  reloadCPU() {
    this.hardwareService.getCPUInfo().subscribe(
      data => this.cpuInfo = data.valueOf()['cpu']
    );
  }

  reloadHDD() {
    this.hardwareService.getHDDInfo().subscribe(
      data => {
        this.maxSpace = data.valueOf()['total'];
        this.currentSpace = data.valueOf()['free_space'];
      }
    );
  }
}
