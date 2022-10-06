import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  stats = [
    {value: 22, label: '# of users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'}
  ];
  items = [
    {image: '/assets/couch.jpeg', title: 'Couch', description: ' A good red couch'},
    {image: '/assets/dresser.jpeg', title: 'Dresser', description: 'Dresser to put your things in it'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
