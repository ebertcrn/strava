import { Component, OnInit } from '@angular/core';

import { StravaService } from '../../shared/strava.service';
import { Athlete } from '../../shared/models/athlete.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ACCESS_TOKEN: string = '66ed350f3a97aa149b91edfc7a9d1f0d8e00d812';

  athlete!: Athlete;

  constructor(private stravaService: StravaService) {}

  ngOnInit(): void {
    this.stravaService
      .getAthlete(this.ACCESS_TOKEN)
      .subscribe((res: Athlete) => {
        this.athlete = res;
      });
  }
}
