import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ITeam } from '../modules/team';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
	title: String = 'Team list from Spring!';
	public teams: ITeam[] = [];
	
  constructor(private teamService: TeamService) { }

  ngOnInit() {
		this.getAllTeams();
  }

	public getAllTeams() {
		this.teamService.getTeams()
		.subscribe(
			res => {
				this.teams = res;
			},
			err => {
				console.log('An error has occured'/* , err */);
			}
		);
	}

}
