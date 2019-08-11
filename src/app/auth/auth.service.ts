import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url_backend;

  constructor(public http: HttpClient) { }

  login(usuario){
    return this.http.post(this.url + "/user_token",
    {
      auth:usuario
    });
  }
}
