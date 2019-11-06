import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITeam } from '../modules/team';
import { Observable } from 'rxjs';
/* import 'rxjs/add/operator/catch'; */

@Injectable()
export class TeamService {
	
	private _url = "http://localhost:8080/team";

	constructor(private http: HttpClient) {	}

	getTeams(): Observable<ITeam[]> {
		return this.http.get<ITeam[]>(this._url);
	}

}