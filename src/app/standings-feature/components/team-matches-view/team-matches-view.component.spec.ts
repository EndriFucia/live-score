import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMatchesViewComponent } from './team-matches-view.component';

describe('TeamMatchesViewComponent', () => {
  let component: TeamMatchesViewComponent;
  let fixture: ComponentFixture<TeamMatchesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMatchesViewComponent]
    });
    fixture = TestBed.createComponent(TeamMatchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
