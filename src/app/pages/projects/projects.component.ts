import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  blogImage = '../../../assets/images/Home_page.jpg';
  // youtubeImage = '../../assets/ued.png';
  // netflixImage = '../../assets/uetflix.png';
  // myMart = "../../../assets/images/image.png";

  myMartLink="www.google.com";


  constructor() { }

  ngOnInit(): void {
  }

}
