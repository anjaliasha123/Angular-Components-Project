import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statitics',
  templateUrl: './statitics.component.html',
  styleUrls: ['./statitics.component.css']
})
export class StatiticsComponent implements OnInit {

  @Input() data: {value: number, label: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
