import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    apiUrl: string = environment.apiUrl;
    clientId = environment.clientId;
    clientSecret = environment.clientSecret;

    constructor(
        private httpClient: HttpClient
    ) { }

    getAnimeData(): Observable<any> {
        return this.httpClient.get<any>(this.apiUrl + '/anime');
    }
}