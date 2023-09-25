export interface Leauge {
    id: number;
    name: string;
    type: string;
    logo: string;
}

export interface Country {
    name: string;
    code: string;
    flag: string;
}

export interface FixtureBool {
    events: boolean;
    lineups: boolean;
    statistics_fixtures: boolean;
    statistics_players: boolean;
}

export interface Coverage {
    fixtures: FixtureBool;
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
}

export interface Season {
    year: number;
    start: Date;
    end: Date;
    current: boolean;
    coverage: Coverage;
}

export interface LeaugeDetails {
    league: Leauge;
    country: Country;
    seasons: Season[];
}
