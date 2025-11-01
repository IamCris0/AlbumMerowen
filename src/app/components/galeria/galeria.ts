import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  lyrics: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {
  selectedSong: Song | null = null;

  songs: Song[] = [
    {
      id: 1,
      title: 'RARA VEZ',
      artist: 'Milo J',
      album: 'Vida de Artista',
      duration: '3:24',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      lyrics: `Me siento raro cuando no estás
No sé si es amor o ansiedad
Rara vez me siento así
Rara vez pienso en ti

Y aunque quiera olvidarte
No puedo sacarte de mi mente
Eres como un tatuaje permanente
Que nunca se borra, simplemente

Me haces falta cuando no estás
Me sobras cuando estás acá
Rara vez te quiero ver
Rara vez te quiero tener`,
    },
    {
      id: 2,
      title: 'M.A.I',
      artist: 'Milo J',
      album: 'Bien Loco',
      duration: '2:58',
      cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
      lyrics: `Música, arte e ignorancia
Son tres pilares de mi esencia
Vivo en la inconsistencia
Buscando siempre la trascendencia

No me importa lo que digan
Si total la vida siga
Yo voy a seguir mi instinto
Aunque el camino sea distinto

M.A.I, eso es lo que soy
M.A.I, así es como estoy
Entre el caos y la calma
Buscando paz para mi alma`,
    },
    {
      id: 3,
      title: 'PARAISO',
      artist: 'Milo J',
      album: 'Single',
      duration: '3:45',
      cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      lyrics: `Quiero llevarte al paraíso
Donde no exista el compromiso
Donde seamos libres tú y yo
Sin nadie que nos diga no

En ese lugar no hay dolor
Solo existe nuestro amor
Donde el tiempo no existe
Y la tristeza se resiste

Paraíso, nuestro lugar
Donde podemos soñar
Paraíso, sin final
Donde todo es especial`,
    },
    {
      id: 4,
      title: 'VIDA DE ARTISTA',
      artist: 'Milo J',
      album: 'Vida de Artista',
      duration: '4:12',
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
      lyrics: `Esta es la vida de artista
Donde todo cambia en la pista
Un día arriba, otro abajo
Pero nunca me relajo

Escribo mi historia en cada canción
Expreso lo que llevo en el corazón
No busco fama ni reconocimiento
Solo quiero vivir este momento

Vida de artista, es lo que elegí
Aunque a veces me haga sufrir
Vida de artista, mi verdad
Mi forma de expresar libertad`,
    },
    {
      id: 5,
      title: 'A1',
      artist: 'Milo J',
      album: 'Singles',
      duration: '3:18',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      lyrics: `Siempre en la A1, nunca en la B
Primer nivel, así es como me ves
No bajo la guardia, mantengo el nivel
A1 en todo, esa es mi ley

Desde el día uno yo lo supe
Que mi destino era este street
No hay vuelta atrás, solo pa' adelante
A1 siempre, soy constante

Esta es mi ruta, mi camino
A1 marcado en mi destino
Sin descanso, sin respiro
A1 hasta que expire`,
    },
    {
      id: 6,
      title: 'ANTES DE LOS 20',
      artist: 'Milo J',
      album: 'EP',
      duration: '3:52',
      cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop',
      lyrics: `Antes de los 20 quiero lograrlo
Cumplir mis sueños sin pensarlo
No hay tiempo que perder
Es ahora o nunca, hay que crecer

Dicen que soy muy joven
Pero mi alma es veterana
Antes de los 20 voy a demostrarlo
Que la edad no define tu legado

No me importa cuántos años tengo
Lo que importa es lo que sostengo
Mi pasión, mi dedicación
Antes de los 20, cumplo mi misión`,
    },
  ];

  onSongHover(song: Song): void {
    this.selectedSong = song;
  }

  onSongLeave(): void {
    this.selectedSong = null;
  }

  playSong(song: Song): void {
    console.log(`Playing: ${song.title} by ${song.artist}`);
  }
}
