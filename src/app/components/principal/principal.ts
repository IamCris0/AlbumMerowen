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
  albumSubtitle = 'Nombre Album';
  
  sections = [
    {
      title: 'Gallery',
      description: 'Explora el contenido visual del álbum',
      icon: '📸',
      color: '#FF6B6B'
    },
    {
      title: 'Lyrics',
      description: 'Lee todas las letras de las canciones y sus significados',
      icon: '🎵',
      color: '#4ECDC4'
    },
    {
      title: 'Extras',
      description: 'Contenido adicional',
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