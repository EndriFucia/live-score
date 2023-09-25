import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { LeaugeDetails } from '../../shared/models/leauges';
import { EMPTY, Observable, catchError, map, shareReplay, tap } from 'rxjs';
import { ResponseLeauge } from '../../shared/models/standings';
import { ResponseBaseModel } from '../../shared/models/base';
import { FixutreDetails } from '../../shared/models/fixtures';

@Injectable({
    providedIn: 'root',
})
export class SoccerDataService {
    headers = new HttpHeaders().set('x-rapidapi-key', environment.key);
    countryLeauges: { [key: string]: string } = {
        England: 'Premier League',
        Spain: 'La Liga',
        France: 'Ligue 1',
        Germany: 'Bundesliga',
        Italy: 'Serie A',
    };

    constructor(private http: HttpClient) {}

    getLeaugeId(country: string) {
        const fullUrl = `${environment.apiBaseUrl}/leagues?name=${
            this.countryLeauges[country]
        }&country=${country}&season=${new Date().getFullYear()}`;
        return this.http.get<ResponseBaseModel<LeaugeDetails>>(fullUrl, { headers: this.headers }).pipe(
            map((leaugeDetails: ResponseBaseModel<LeaugeDetails>) => leaugeDetails.response[0]),
            shareReplay(1),
            catchError((err) => {
                console.error(err);
                return EMPTY;
            })
        );
    }

    getStandings(countryId: number): Observable<ResponseLeauge> {
        const fullUrl = `${environment.apiBaseUrl}/standings?league=${countryId}&season=${new Date().getFullYear()}`;
        return this.http.get<ResponseBaseModel<ResponseLeauge>>(fullUrl, { headers: this.headers }).pipe(
            map((leagueStandings: ResponseBaseModel<ResponseLeauge>) => leagueStandings.response[0]),
            shareReplay(1),
            catchError((err) => {
                console.error(err);
                return EMPTY;
            })
        );
    }

    getTenLastFixtures(leaugeId: number, teamId: number): Observable<FixutreDetails[]> {
        const fullUrl = `${
            environment.apiBaseUrl
        }/fixtures?league=${leaugeId}&season=${new Date().getFullYear()}&team=${teamId}&last=10`;
        return this.http.get<ResponseBaseModel<FixutreDetails>>(fullUrl, { headers: this.headers }).pipe(
            map((fixtures) => fixtures.response),
            shareReplay(1),
            catchError((err) => {
                return EMPTY;
            })
        );
    }
}

// private leaugeSelectedSubject = new BehaviorSubject<string>('England');
// leagueSelectedAction$ = this.leaugeSelectedSubject.asObservable();

// leauges$ = this.http.get<ResponseBaseModel<LeaugeDetails>>(
//     `${environment.apiBaseUrl}/leagues&season=${new Date().getFullYear()}`,
//     { headers: this.headers }
// );

// selectedLeague$ = combineLatest([this.leauges$, this.leagueSelectedAction$]).pipe(
//     map(([leaguesResponse, country]) => leaguesResponse.response.find((league) => league.country.name == country)),
//     tap((league) => console.log('League found in service : ' + league?.league.name))
// );
