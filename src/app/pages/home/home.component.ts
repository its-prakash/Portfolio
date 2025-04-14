import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = '';
  words = ["prakash"];
  currentWordIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    const currentWord = this.words[this.currentWordIndex];
    if (this.isDeleting) {
      this.text = currentWord.substring(0, this.currentCharIndex--);
    } else {
      this.text = currentWord.substring(0, this.currentCharIndex++);
    }

    if (!this.isDeleting && this.currentCharIndex > currentWord.length) {
      this.isDeleting = true;
      setTimeout(() => {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.currentCharIndex = 0;
        this.typeText();
      }, 30000);
    } else if (this.isDeleting && this.currentCharIndex < 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.currentCharIndex = 0;
    }

    setTimeout(() => {
      this.typeText();
    }, this.isDeleting ? 1000 : 80);
  }
}




