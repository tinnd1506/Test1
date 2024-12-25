import { Component, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../safe-url.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-youtube-embed',
  standalone: true,
  imports: [NgIf, SafeUrlPipe],
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.scss'],
})
export class YoutubeEmbedComponent  implements OnInit{
  apiUrl = 'http://localhost:3100/server/getVideo'; // URL to fetch the 
  videoUrl = ''; 
  error = '';   
  logMessage(){
    console.log('Component loaded');
  }
  // Fetch the video URL from the backend
  async getVideoUrl(){
    try{
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      this.videoUrl = data.url;
    } catch (err) {
      console.log('Error fetching video URL:', err);
      this.error = 'Failed to load the video. Make sure the backend is running on port 3100';
    }
  }


  ngOnInit() {
    this.getVideoUrl();    
    this.logMessage();
  }
}
