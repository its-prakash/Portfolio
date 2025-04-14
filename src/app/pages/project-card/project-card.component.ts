import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  bannerImage!: string;
  @Input()
  title!: string;
  @Input()
  text!: string;
  @Input()
  link!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
