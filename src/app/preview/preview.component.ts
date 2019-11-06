import { Component, OnInit } from '@angular/core';

export interface PlayerElement {
	name: String;
	position: number;
	points: number;
	price: number;
}

const TEAM_DATA: PlayerElement[] = [
	{ name: 'Pickford', position: 1, points: 6, price: 5.5 },
	{ name: 'Heaton', position: 1, points: 1, price: 4.5 },
	{ name: 'Zinchenko', position: 2, points: 1, price: 5.5 },
	{ name: 'van Dijk', position: 2, points: 2, price: 6.5 },
	{ name: 'Alexander-Arnold', position: 2, points: 1, price: 7.0 },
	{ name: 'Dunk', position: 2, points: 3, price: 4.5 },
	{ name: 'Kelly', position: 2, points: 2, price: 4.0 },
	{ name: 'Pulisic', position: 3, points: 2, price: 7.5 },
	{ name: 'Sterling', position: 3, points: 12, price: 12.0 },
	{ name: 'Fraser', position: 3, points: 2, price: 7.5 },
	{ name: 'Sigurdsson', position: 3, points: 3, price: 8.0 },
	{ name: 'Barkley', position: 3, points: 0, price: 6.0 },
	{ name: 'Origi', position: 4, points: 1, price: 5.5 },
	{ name: 'Wilson', position: 4, points: 5, price: 8.0 },
	{ name: 'Jota', position: 4, points: 0, price: 6.5 }
];


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
	pitchView: boolean = false;

	columnsNames: string[] = ['name', 'position', 'points', 'price'];
	playersArray = TEAM_DATA;
	
  constructor() { }

  ngOnInit() {
	}
	
	convertPosition(n: number) {
		switch (n) {
			case 1:
				return 'GK';
			case 2:
				return 'DF';
			case 3:
				return 'MD';
			case 4:
				return 'FW';
		}
	}
}
