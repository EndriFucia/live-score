import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsViewComponent } from './standings-view/standings-view.component';

const routes: Routes = [
    {
        path: ':id',
        component: StandingsViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StandingsFeatureRoutingModule {}
