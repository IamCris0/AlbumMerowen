import { Routes } from '@angular/router';
import { Principal } from './components/principal/principal';
import { Galeria } from './components/galeria/galeria';
import { Lyrics } from './components/lyrics/lyrics';
import { Extras } from './components/extras/extras';

export const routes: Routes = [
  { path: '', component: Principal },
  { path: 'gallery', component: Galeria },
  { path: 'lyrics', component: Lyrics },
  { path: 'extras', component: Extras },
  { path: '**', redirectTo: '' }
];
