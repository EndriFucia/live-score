import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsViewComponent } from './components/standings-view/standings-view.component';
import { TeamMatchesViewComponent } from './components/team-matches-view/team-matches-view.component';

const routes: Routes = [
    {
        path: ':leagueId',
        component: StandingsViewComponent,
    },
    { path: ':leagueId/team/:teamId', component: TeamMatchesViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StandingsFeatureRoutingModule {}
