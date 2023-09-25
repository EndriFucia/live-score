import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsViewComponent } from './standings-view/standings-view.component';
import { StandingsFeatureRoutingModule } from './standaing-features-routing.module';
import { SoccerDataService } from './soccer-data.service';
import { StandingComponent } from './standing/standing.component';

@NgModule({
    declarations: [StandingsViewComponent, StandingComponent],
    imports: [CommonModule, StandingsFeatureRoutingModule],
    exports: [StandingsFeatureRoutingModule],
    providers: [SoccerDataService],
})
export class StandingsFeatureModule {}
