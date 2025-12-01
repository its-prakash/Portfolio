import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isMenuOpen: boolean = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

}
