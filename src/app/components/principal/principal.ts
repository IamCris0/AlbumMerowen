import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  albumTitle = 'MEROWEN';
  albumSubtitle = 'The Ultimate Collection';
  
  sections = [
    {
      title: 'Gallery',
      description: 'Explore exclusive photos and artwork',
      icon: '📸',
      color: '#FF6B6B'
    },
    {
      title: 'Lyrics',
      description: 'Read all song lyrics and meanings',
      icon: '🎵',
      color: '#4ECDC4'
    },
    {
      title: 'Extras',
      description: 'Behind the scenes and bonus content',
      icon: '✨',
      color: '#FFE66D'
    }
  ];

  constructor(private router: Router) {}

  onSectionClick(section: string) {
    console.log(`Navigating to ${section}`);
    
    if (section === 'Gallery') {
      this.router.navigate(['/gallery']);
    } else if (section === 'Lyrics') {
      this.router.navigate(['/lyrics']);
    } else if (section === 'Extras') {
      this.router.navigate(['/extras']);
    }
  }
}