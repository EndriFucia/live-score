import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LeaugeDetails } from '../shared/models/leauges';
import { Observable } from 'rxjs';
import { ResponseLeauge } from '../shared/models/standings';
import { ResponseBaseModel } from '../shared/models/base';

@Injectable({
    providedIn: 'root',
})
export class SoccerDataService {
    countryLeauge: { [key: string]: string } = {
        England: 'Premier League',
        Spain: 'La Liga',
        France: 'Ligue 1',
        Germany: 'Bundesliga',
        Italy: 'Serie A',
    };

    headers = new HttpHeaders().set('x-rapidapi-key', environment.key);

    constructor(private http: HttpClient) {}

    getLeaugeId(country: string): Observable<ResponseBaseModel<LeaugeDetails>> {
        const fullUrl = `${environment.apiBaseUrl}/leagues?name=${
            this.countryLeauge[country]
        }&country=${country}&season=${new Date().getFullYear()}`;
        return this.http.get<ResponseBaseModel<LeaugeDetails>>(fullUrl, { headers: this.headers });
    }

    getStandings(countryId: number): Observable<ResponseBaseModel<ResponseLeauge>> {
        const fullUrl = `${environment.apiBaseUrl}/standings?league=${countryId}&season=${new Date().getFullYear()}`;
        return this.http.get<ResponseBaseModel<ResponseLeauge>>(fullUrl, { headers: this.headers });
    }
}
