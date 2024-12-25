package com.example.server.api.controller;
import com.example.server.api.model.Playlist;
import com.example.server.api.model.Video;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/server")
@CrossOrigin
public class VideoController {


    @GetMapping("/getVideo")
    public ResponseEntity<Video>  getVideo(){
        Video video = new Video("https://www.youtube.com/embed/yXQViqx6GMY");
        return ResponseEntity.ok(video);
    }

    @GetMapping("/getPlaylist")
    public ResponseEntity<Playlist> getPlaylist(){
        List<String> urls = Arrays.asList(
                "https://www.youtube.com/embed/yXQViqx6GMY", "https://www.youtube.com/embed/QJ5DOWPGxwg", "https://www.youtube.com/embed/sE3uRRFVsmc?si=1IcvWeOaZMz4PL7X", "https://www.youtube.com/embed/N8NcQzMQN_U?si=hGY0sFJkiG_9XxxT", "https://www.youtube.com/embed/Jay_-l6NaC8?si=8mY9Qh1_jrdYCVqv"
        );

        Playlist playlist = new Playlist(urls);
        return ResponseEntity.ok(playlist);


    }
}
