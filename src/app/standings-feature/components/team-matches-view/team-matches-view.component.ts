import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoccerDataService } from '../../services/soccer-data.service';
import { FixutreDetails } from 'src/app/shared/models/fixtures';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Component({
    selector: 'ls-team-matches-view',
    templateUrl: './team-matches-view.component.html',
    styleUrls: ['./team-matches-view.component.scss'],
})
export class TeamMatchesViewComponent implements OnInit {
    fixtureDetails!: { leagueId: number; teamId: number };
    @Output() backClicked = new EventEmitter<boolean>();
    fixtures$!: Observable<FixutreDetails[]>;

    constructor(
        private soccerService: SoccerDataService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            this.fixtureDetails = {
                leagueId: params['leagueId'],
                teamId: params['teamId'],
            };
            if (this.fixtureDetails.leagueId !== undefined && this.fixtureDetails.teamId !== undefined) {
                this.getFixtures();
            } else {
                console.log('Could not fetch fixtures data because route parameters were incorrect!');
            }
        });
    }

    getFixtures() {
        this.fixtures$ = this.soccerService
            .getTenLastFixtures(this.fixtureDetails.leagueId, this.fixtureDetails.teamId)
            .pipe(
                map((fixtureResponse: FixutreDetails[]) => fixtureResponse),
                catchError((err) => {
                    console.error(err);
                    return EMPTY;
                })
            );
    }

    buttonBackClick() {
        if (this.fixtureDetails.leagueId !== undefined && this.fixtureDetails.teamId !== undefined) {
            this.backClicked.next(true);
            this.router.navigate(['/standings/' + this.fixtureDetails.leagueId]);
        } else {
            console.log('Could not navigateback because route parameters were incorrect!');
        }
    }
}
