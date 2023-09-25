import { Component, OnDestroy, OnInit } from '@angular/core';
import { SoccerDataService } from '../../services/soccer-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { LeaugeStandings, ResponseLeauge } from 'src/app/shared/models/standings';
import { standingsConstArray } from 'src/app/shared/standings.data';

@Component({
    selector: 'ls-standings-view',
    templateUrl: './standings-view.component.html',
    styleUrls: ['./standings-view.component.scss'],
})
export class StandingsViewComponent implements OnInit, OnDestroy {
    leaugeStandings$!: Observable<LeaugeStandings>;
    currentLeaugeId!: number;
    currentTeamId!: number;
    //standingsArray = standingsConstArray;
    standingsSubscription!: Subscription;
    fixtureNavigationClicked = false;

    constructor(
        private soccerService: SoccerDataService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        //this.standingsArray = standingsConstArray;

        this.standingsSubscription = this.activatedRoute.params.subscribe((param) => {
            this.currentLeaugeId = param['leagueId'];
            this.leaugeStandings$ = this.soccerService
                .getStandings(param['leagueId'])
                .pipe(map((leaugeResponse: ResponseLeauge) => leaugeResponse.league));
        });
    }

    goToFixtures(teamId: number) {
        this.fixtureNavigationClicked = true;
        this.currentTeamId = teamId;
        if (this.currentLeaugeId !== undefined && teamId !== undefined) {
            this.router.navigate(['/standings/' + this.currentLeaugeId + '/team/' + teamId]);
        } else {
            console.log('Could not fetch team data!');
        }
    }

    resetView() {
        this.fixtureNavigationClicked = false;
    }

    ngOnDestroy(): void {
        this.standingsSubscription.unsubscribe();
    }
}
