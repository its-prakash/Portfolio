import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.animation()
  }

  animation() {
    const tl = gsap.timeline()

    tl.from("#image", {
      duration: 2,
      y: -100,
      opacity: 0,
      ease: "power2.out",
    })

    tl.from("#name", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power2.out",
    }, "-=1.5")

    tl.from("#specality", {
      duration: 1,
      x: 200,
      opacity: 0,
      ease: "power2.out",
    }, "-=1.2")

    gsap.from("#about-section p", {
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
      duration: 1,
      x: 200,
      opacity: 0,
      stagger:0.33,
      ease: "power2.out",
    })
  }
}