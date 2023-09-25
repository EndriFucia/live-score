export interface Standing {
    rank: number;
    team: Team;
    points: number;
    goalsDiff: number;
    group: string;
    form: string;
    status: string;
    description: string;
    all: GameStats;
    home: GameStats;
    away: GameStats;
    update: Date;
}

export interface LeaugeStandings {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings: Array<Standing[]>;
}

export interface ResponseLeauge {
    league: LeaugeStandings;
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface GameStats {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goals;
}

export interface Goals {
    for: number;
    against: number;
}
