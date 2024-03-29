import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { SoccerDataService } from 'src/app/standings-feature/services/soccer-data.service';
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
        this.soccerService.leaugeSelectedSubject.next(country);
        this.leagueIdSubscription = this.soccerService.selectedLeague$.subscribe((leaugeDetails) => {
            if (leaugeDetails !== undefined) {
                this.router.navigate(['/standings/' + leaugeDetails.league.id]);
            } else {
                console.log('Could not fetch league!');
            }
        });
    }
}
