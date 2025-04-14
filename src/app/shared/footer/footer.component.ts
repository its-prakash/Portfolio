import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email = 'koushik.use@gmail.com';
  linkedinUrl = 'https://linkedin.com/abcd';
  githubUrl = 'https://github.com/abcd';
  phoneNumber = '+91-1234567890';
  currentYear = new Date().getFullYear();



  constructor() { }

  ngOnInit(): void {
  }

}

