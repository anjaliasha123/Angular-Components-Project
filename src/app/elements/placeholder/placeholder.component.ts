import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  @Input() header = true;
  @Input() lines = 3;
  text = "Placeholder Component";
  constructor() { }

  ngOnInit(): void {
  }

}
