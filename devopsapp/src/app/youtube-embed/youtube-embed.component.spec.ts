import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeEmbedComponent } from './youtube-embed.component';

describe('YoutubeEmbedComponent', () => {
  let component: YoutubeEmbedComponent;
  let fixture: ComponentFixture<YoutubeEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeEmbedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
