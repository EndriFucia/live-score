import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, map, switchMap, tap } from 'rxjs';
import { SoccerDataService } from 'src/app/standings-feature/soccer-data.service';
import { ResponseBaseModel } from '../models/base';
import { LeaugeDetails } from '../models/leauges';

@Component({
    selector: 'ls-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnDestroy {
    countries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
    selectedCountryId: number = 0;
    leagueIdSubscription!: Subscription;

    constructor(private router: Router, private soccerService: SoccerDataService) {}

    ngOnDestroy(): void {
        this.leagueIdSubscription.unsubscribe();
    }

    navigateTo(country: string) {
        // this.leagueIdSubscription = this.soccerService
        //     .getLeaugeId(country)
        //     .subscribe((leaugeDetails: ResponseBaseModel<LeaugeDetails>) => {
        //         this.router.navigate(['/standings/' + leaugeDetails.response[0].league.id]);
        //     });
        this.router.navigate(['/standings/' + country]);
    }
}
