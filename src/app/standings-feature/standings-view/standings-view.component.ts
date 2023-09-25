import { Component, OnDestroy, OnInit } from '@angular/core';
import { SoccerDataService } from '../soccer-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, catchError, map, of } from 'rxjs';
import { LeaugeStandings, ResponseLeauge } from 'src/app/shared/models/standings';
import { ResponseBaseModel } from 'src/app/shared/models/base';
import { standingsConstArray } from 'src/app/shared/standings.data';

@Component({
    selector: 'ls-standings-view',
    templateUrl: './standings-view.component.html',
    styleUrls: ['./standings-view.component.scss'],
})
export class StandingsViewComponent implements OnInit, OnDestroy {
    leaugeStandings$!: Observable<LeaugeStandings>;
    standingsArray = standingsConstArray;
    standingsSubscription!: Subscription;

    constructor(private soccerService: SoccerDataService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.standingsArray = standingsConstArray;
        // this.standingsSubscription = this.activatedRoute.params.subscribe((param) => {
        //     this.leaugeStandings$ = this.soccerService.getStandings(param['id']).pipe(
        //         map((leaugeResponse: ResponseBaseModel<ResponseLeauge>) => {
        //             return leaugeResponse.response[0].league;
        //         })
        //         //catchError(() => of([]))
        //     );
        // });
    }

    ngOnDestroy(): void {
        this.standingsSubscription.unsubscribe();
    }
}
