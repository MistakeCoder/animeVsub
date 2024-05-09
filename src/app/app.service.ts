import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    apiUrl: string = environment.apiUrl;
    private clientId = environment.clientId;
    private clientSecret = environment.clientSecret;
    private state = '7T4S3PNNJ71FLZ';
    private codeChallenge = '7T4S3PNNJ71FLZ8RGFCH9LHB6WK8LIDT47X38913ANL';
    constructor(
        private http: HttpClient
    ) {

    }

    clientRequestAuthentication() {
        const urlAuth = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${this.clientId}&state=${this.state}&redirect_uri=https://myanimelist.net/dialog/authorization&code_challenge=${this.codeChallenge}&code_challenge_method=plainHTTP/1.1`;
        return this.http.get(urlAuth);
    }
} 