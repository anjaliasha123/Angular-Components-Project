import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  
  classNames = 'striped celled';
  data = [
    {name: 'James', age: 24, job: 'Designer'},
    {name: 'Drake', age: 30, job: '.Net developer'},
    {name: 'Emily', age: 21, job: 'Frontend developer'}
  ];
  headers = [
    {key: 'name', label: 'Name'},
    {key:'age', label:'Age'},
    {key:'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
