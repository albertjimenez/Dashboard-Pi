import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private httpClient: HttpClient) {
  }

  getPene() {
    return 1;
  }

  getLastPushUpdate(): PushEventData {
    const pushEventData: PushEventData = {
      username: 'albertjimenez',
      avatar_url: 'https://avatars0.githubusercontent.com/u/12547680?v=4',
      dateUpdated: new Date('2018-08-02T20:39:58+02:00'),
      projectName: 'Frontend-FandF',
      projectUrl: 'https://github.com/albertjimenez/Frontend-FandF'
    };
    return pushEventData;
  }


}

export interface PushEventData {
  username: string;
  avatar_url: string;
  dateUpdated: Date;
  projectName: string;
  testOk?: boolean;
  projectUrl: string;
}
