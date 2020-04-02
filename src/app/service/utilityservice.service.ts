import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class UtilityserviceService {
  private username:string;
  private clientid = '9e39d25ce81632e6be29';
  private clientsecret = '4d528fef83f550d33a75d945f4abb15f8ecfd399';

  constructor(private http:HttpClient) { 
  	console.log("service is now ready!");
  	this.username = 'gufran';
  }

  getProfileInfo():Observable<any>{
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    
  }

  getProfileRepos():Observable<any>{
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  updateProfile(username:string){
  	this.username = username;
  }

}

