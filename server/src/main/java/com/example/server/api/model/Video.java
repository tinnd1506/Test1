package com.example.server.api.model;

public class Video {
    private String url;

    public Video(String url){
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
