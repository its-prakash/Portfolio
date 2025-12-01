import { NgClass, NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string; // Add links for buttons later
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent implements AfterViewInit {

  projects: Project[] = [
    {
      title: 'FruitBasket E-Commerce',
      image: '/images/fruitBasket.png',
      description: 'FruitBasket is an online platform where customers can browse and purchase fresh, high-quality fruits from local farmers and suppliers.',
      technologies: ['Angular', 'Tailwind CSS', 'Express Js', 'MySQL'],
      link: '#'
    },
    {
      title: 'Project Two Title',
      image: '/images/fruitBasket.png',
      description: '[Brief description of the second project, ensuring it\'s 2-3 lines long.]',
      technologies: ['React', 'Node.js', 'MongoDB', 'Mongoose'],
      link: '#'
    },
    {
      title: 'Project Three Title',
      image: '/images/fruitBasket.png',
      description: '[Brief description of the third project, ensuring it\'s 2-3 lines long.]',
      technologies: ['Vue.js', 'Firebase', 'Sass'],
      link: '#'
    }
  ];

  // projects.component.ts (in your ProjectsComponent class)

  getTechClass(tech: string): string {
    switch (tech) {
      case 'Angular':
        return 'bg-red-100 text-red-800'; // Change to red to match the image (Angular is often red)
      case 'Tailwind CSS':
        return 'bg-teal-100 text-teal-800';
      case 'MySQL':
        return 'bg-blue-100 text-blue-800';
      case 'React':
        return 'bg-cyan-100 text-cyan-800';
      case 'Node.js':
        return 'bg-green-100 text-green-800';
      default:
        // Default styling for all other tags
        return 'bg-gray-200 text-gray-700';
    }
  }

  ngAfterViewInit(): void {
    this.animation()
  }

  animation() {
    gsap.from("#skills-section h2", {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#skills-section",
        start: "top 80%",
      }
    });

    // EACH CARD ANIMATION
    gsap.from("#skills-section .rounded-xl", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#skills-section",
        start: "top 75%",
      }
    });

    // ICON ANIMATION (IN LIST)
    gsap.from("#skills-section ul li", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.08,
      scrollTrigger: {
        trigger: "#skills-section",
        start: "top 70%",
      }
    });


    // PROJECT CARDS ANIMATION
    gsap.from("#projects-section > div", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#projects-section",
        start: "top 80%",
      }
    });

    // PROJECT IMAGES ZOOM-IN EFFECT
    gsap.from("#projects-section img", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#projects-section",
        start: "top 85%",
      }
    });

    // TAGS (TECH STACK BADGES) APPEAR WITH STAGGER
    gsap.from("#projects-section span", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#projects-section",
        start: "top 75%",
      }
    });

    // EDUCATION SECTION TITLE
    gsap.from("#education-section h2", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#education-section",
        start: "top 85%",
      }
    });

    // EDUCATION CARDS
    gsap.from("#education-section .rounded-lg", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#education-section",
        start: "top 80%",
      }
    });

    // TEXT INSIDE CARDS (YEAR, TITLE, COLLEGE, DETAILS)
    gsap.from("#education-section .rounded-lg *", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: "#education-section",
        start: "top 75%",
      }
    });
  }
}
