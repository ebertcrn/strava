import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Athlete } from './models/athlete.interface';

@Injectable({
  providedIn: 'root',
})
export class StravaService {
  API_LOGIN_REDIRECT: string = 'https://www.strava.com/oauth/authorize';
  API_GET_ATHLETE: string = 'https://www.strava.com/api/v3/athlete';

  constructor(private http: HttpClient) {}

  getAthlete(accessToken: string): Observable<Athlete> {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return this.http.get(this.API_GET_ATHLETE, {
      headers,
    }) as Observable<Athlete>;
  }
}
