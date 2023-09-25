import { Component, Input } from '@angular/core';
import { Standing } from 'src/app/shared/models/standings';

@Component({
    selector: 'ls-standing',
    templateUrl: './standing.component.html',
    styleUrls: ['./standing.component.scss'],
})
export class StandingComponent {
    @Input() standing!: Standing;
}
