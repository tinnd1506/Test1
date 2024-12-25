import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasPlaylistComponent } from './christmas-playlist.component';

describe('ChristmasPlaylistComponent', () => {
  let component: ChristmasPlaylistComponent;
  let fixture: ComponentFixture<ChristmasPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmasPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmasPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
