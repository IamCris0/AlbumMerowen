import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  onSectionClick(section: string) {
    console.log(`Navigating to ${section}`);
  }
}