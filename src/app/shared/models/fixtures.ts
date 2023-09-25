import { Team } from './standings';

export interface Fixture {
    id: number;
    referee: string;
    timezone: string;
    date: Date;
    timestamp: number;
    periods: FixturePeriod;
    venue: Venue;
    status: FixtureStatus;
}

export interface FixturePeriod {
    first: number;
    second: number;
}

export interface Venue {
    id: number;
    name: string;
    city: string;
}

export interface FixtureStatus {
    long: string;
    short: string;
    elapsed: number;
}

interface FixtureLeauge {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
}

interface FixtureTeam {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
}

interface FixtureTeams {
    home: FixtureTeam;
    away: FixtureTeam;
}

interface FixutreGoals {
    home: number;
    away: number;
}

interface MatchDetails {
    home: number | null;
    away: number | null;
}

interface FixtureScore {
    halftime: MatchDetails;
    fulltime: MatchDetails;
    extratime: MatchDetails;
    penalty: MatchDetails;
}

export interface FixutreDetails {
    fixture: Fixture;
    league: FixtureLeauge;
    teams: FixtureTeams;
    goals: FixutreGoals;
    score: FixtureScore;
}
