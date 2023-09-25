import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoccerDataService } from '../../services/soccer-data.service';
import { FixutreDetails } from 'src/app/shared/models/fixtures';
import { Observable, map } from 'rxjs';

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
            this.getFixtures();
        });
    }

    getFixtures() {
        this.fixtures$ = this.soccerService
            .getTenLastFixtures(this.fixtureDetails.leagueId, this.fixtureDetails.teamId)
            .pipe(map((fixtureResponse: FixutreDetails[]) => fixtureResponse));
    }

    buttonBackClick() {
        this.backClicked.next(true);
        this.router.navigate(['/standings/' + this.fixtureDetails.leagueId]);
    }
}
