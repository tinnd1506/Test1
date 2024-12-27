import { Routes } from '@angular/router';
import { YoutubeEmbedComponent } from './youtube-embed/youtube-embed.component';
import { ChristmasPlaylistComponent } from './christmas-playlist/christmas-playlist.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '',  component: HomeComponent},
    {path: 'tony', component: YoutubeEmbedComponent},
    {path: 'christmas-playlist', component: ChristmasPlaylistComponent},
];
