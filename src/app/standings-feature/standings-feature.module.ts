import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsViewComponent } from './components/standings-view/standings-view.component';
import { StandingsFeatureRoutingModule } from './standaing-features-routing.module';
import { SoccerDataService } from './services/soccer-data.service';
import { StandingComponent } from './components/standing/standing.component';
import { TeamMatchesViewComponent } from './components/team-matches-view/team-matches-view.component';

@NgModule({
    declarations: [StandingsViewComponent, StandingComponent, TeamMatchesViewComponent],
    imports: [CommonModule, StandingsFeatureRoutingModule],
    exports: [StandingsFeatureRoutingModule],
    providers: [SoccerDataService],
})
export class StandingsFeatureModule {}
