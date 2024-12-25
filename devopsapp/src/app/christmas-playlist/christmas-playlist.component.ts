import { Component, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../safe-url.pipe';
import { NgIf , NgFor} from '@angular/common';


@Component({
  selector: 'app-christmas-playlist',
  imports: [NgIf, NgFor, SafeUrlPipe],
  templateUrl: './christmas-playlist.component.html',
  styleUrl: './christmas-playlist.component.scss'
})
export class ChristmasPlaylistComponent implements OnInit{
  apiUrl = 'http://localhost:3100/server/getPlaylist'; // URL to fetch the playlist from the backend
  playlistUrls: [] = []; 
  error = '';   
  logMessage(){
    console.log('Component loaded');
  }
  // Fetch the video URL from the backend
  async getVideoUrls(){
    console.log('Starting to fetch video URLs');
    try{
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      this.playlistUrls = data.urls;
    } catch (err) {
      console.error('Error fetching video URL:', err);
      this.error = 'Failed to load the videos. Make sure the backend is running on port 3100';
    }
  }


  ngOnInit() {
    this.getVideoUrls();    
    this.logMessage();
  }
}
