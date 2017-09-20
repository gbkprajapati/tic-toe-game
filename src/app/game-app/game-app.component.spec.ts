import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAppComponent } from './game-app.component';

describe('GameAppComponent', () => {
  let component: GameAppComponent;
  let fixture: ComponentFixture<GameAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
