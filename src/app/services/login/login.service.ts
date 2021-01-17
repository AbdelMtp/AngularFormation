import {Injectable} from '@angular/core';
import {User} from 'src/app/modeles/user';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}).set('Accept', 'application/json')
  };

  constructor(private http: HttpClient) {
  }

  private throwError(error: any) {
    console.log('Erreur : ' + error);
    return throwError(error);
  }

  checkConnexion(user: User): Observable<User> {
    let params = new HttpParams();
    // Begin assigning parameters
    params = params.append('pseudo', user.userName);
    params = params.append('password', user.password);
    return this.http.post<any>('https://serveur-demo.macademia.fr/login', {params}, this.httpOptions)
      .pipe(
        tap((data) => console.log('Utilisateur trouvé !')),
        catchError(this.throwError)
      );
  }
  checkConnexion1(user: User): Observable<User> {
    return this.http.get<any>('https://serveur-demo.macademia.fr', this.httpOptions)
      .pipe(
        tap((data) => console.log('Utilisateur trouvé !')),
        catchError(this.throwError)
      );
  }
}
