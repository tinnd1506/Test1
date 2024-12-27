package com.example.server.api.model;

import java.util.List;

public class Playlist {
    private List<String> urls;


    public Playlist(List<String> urls){
        this.urls = urls;
    }

    public void setUrls(List<String> urls) {
        this.urls = urls;
    }

    public List<String> getUrls(){
        return this.urls;
    }
}
