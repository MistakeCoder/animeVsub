// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpClient } from '@angular/common/http';
// import { Observable, from } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//     private tokenUrl = 'https://myanimelist.net/v1/oauth2/token';
//     private apiUrl = environment.apiUrl;
//     private clientId = environment.clientId;
//     private clientSecret = environment.clientSecret;
//     private redirectUri = 'https://www.thunderclient.com/oauth/callback';
//     private state = 'a~67<9AG%y£K';
//     private codeChallenge = '7T4S3PNNJ71FLZ8RGFCH9LHB6WK8LIDT47X38913ANL';

//     constructor(private http: HttpClient) { }

//     async clientRequestAuthentication() {
//         const urlAuth = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${this.clientId}&state=${this.state}&redirect_uri=''&code_challenge=${this.codeChallenge}&code_challenge_method=plain`;
//         return this.http.get(urlAuth);
//     }
//     // // Phương thức để lấy access token từ authorization code
//     // async getAccessToken(authorizationCode: string): Observable<any> {
//     //     const body = `grant_type=authorization_code&client_id=${this.clientId}&client_secret=${this.clientSecret}&code=${authorizationCode}&redirect_uri=${this.redirectUri}`;
//     //     const headers = new HttpHeaders({
//     //         'Content-Type': 'application/x-www-form-urlencoded'
//     //     });
//     //     return this.http.post<any>(this.tokenUrl, body, { headers });
//     // }

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//         // Sử dụng authorization code để lấy access token từ token service
//         return this.getAccessToken(authorizationCode).pipe(
//             switchMap(response => {
//                 const accessToken = response.access_token;
//                 // Thêm token vào headers nếu nó tồn tại
//                 if (accessToken) {
//                     const authReq = req.clone({
//                         headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
//                     });
//                     return next.handle(authReq);
//                 }
//                 return next.handle(req);
//             })
//         );
//     }
// }
