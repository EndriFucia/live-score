import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsViewComponent } from './standings-view.component';

describe('StandingsComponent', () => {
    let component: StandingsViewComponent;
    let fixture: ComponentFixture<StandingsViewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [StandingsViewComponent],
        });
        fixture = TestBed.createComponent(StandingsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
