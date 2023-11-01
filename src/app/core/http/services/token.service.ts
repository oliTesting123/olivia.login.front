import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import { LocalStorageService } from './storage.service';
import { TokenModel, AuthReferrer } from '../interface';

const TOKEN_KEY = 'jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private change$ = new BehaviorSubject(null);
  jwtToken: string;
  decodedToken: { [key: string]: string };

  /**
   * The referrer of current page
   */
  get referrer() {
    return this._referrer;
  }

  private _referrer: AuthReferrer = {};

  constructor(private store: LocalStorageService) {}

  set(data: TokenModel): boolean {
    this.change$.next(data);

    return this.store.set(TOKEN_KEY, data);
  }

  decodeToken(token) {
    if (token) {
    this.decodedToken = jwt_decode(token);
    }
  }

//   getPermissions(token) {
//     this.decodeToken(token);
    
//     return this.decodedToken ? this.decodedToken.permissions : null;
//   }

  get<T extends TokenModel>(type?: new () => T): T {
    const data = this.store.get(TOKEN_KEY);
    
    return type ? (Object.assign(new type(), data) as T) : (data as T);
  }

  clear() {
    this.store.remove(TOKEN_KEY);
  }

  change(): Observable<TokenModel | null> {
    return this.change$.pipe(share());
  }
}
