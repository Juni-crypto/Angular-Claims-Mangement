import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserLoginCredential } from './../model/user-login-credential';

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(username, password) {
    let userlogin:UserLoginCredential={
      username:username,
      password:password
    };
    return this.httpClient
      .post<any>("http://authservice-env.eba-3jtuenxh.us-west-2.elasticbeanstalk.com/api/auth/login", userlogin)
      .pipe(
        map(userData => {
            sessionStorage.setItem("username", username);
            let tokenStr = userData.authToken;
            sessionStorage.setItem("token", tokenStr);
            return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
