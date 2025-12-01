import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import * as THREE from 'three';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy { // Added OnDestroy for cleanup

  @ViewChild('cubeCanvas', { static: true }) cubeCanvas!: ElementRef<HTMLCanvasElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private animationFrameId!: number;


  ngAfterViewInit(): void {
    this.animation();
    this.createScene();
    this.createCube();
    this.startRenderingLoop();
    this.handleResize();
  }

  // Added OnDestroy to clean up the animation frame and renderer
  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    window.removeEventListener('resize', this.handleResize);
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
      stagger: 0.33,
      ease: "power2.out",
    })
  }

  private createScene(): void {
    const canvas = this.cubeCanvas.nativeElement;

    // 1. Scene setup
    this.scene = new THREE.Scene();
    // Using a light gray background to contrast with the silver cube
    this.scene.background = new THREE.Color(); 

    // 2. Camera setup (Perspective Camera)
    const aspect = canvas.clientWidth / canvas.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.z = 2;

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Add lighting (Crucial for the metal look)
    const ambientLight = new THREE.AmbientLight("white", 5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("white", 5);
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);
  }

  private createCube(): void {
    // 4. Geometry (Cube/Box)
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // 5. Material (Silver Metal Look)
    const material = new THREE.MeshStandardMaterial({ 
        color: "#fff",  // Light gray/silver base color
        metalness: 0.9,   // High metalness for metal reflection
        roughness: 0.2,   // Low roughness for a polished look
        wireframe: false 
    }); 

    // 6. Mesh (Geometry + Material)
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }

  private startRenderingLoop(): void {
    let time = 0; 

    const rotationSpeed = 0.005; 
    const verticalRange = 0.8;   
    const verticalSpeed = 0.001; 

    const animate = () => {

      time += 1; 

      this.cube.rotation.x += rotationSpeed;
      this.cube.rotation.y += rotationSpeed;

      // this.cube.position.y = verticalRange * Math.sin(time * verticalSpeed);

      this.cube.scale.z = 1 + 0.05 * Math.sin(time * 0.01); 

      this.renderer.render(this.scene, this.camera);

      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }


  private handleResize = () => {
    const width = this.cubeCanvas.nativeElement.clientWidth;
    const height = this.cubeCanvas.nativeElement.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}