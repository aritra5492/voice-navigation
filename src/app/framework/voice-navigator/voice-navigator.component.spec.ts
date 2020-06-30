import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceNavigatorComponent } from './voice-navigator.component';

describe('VoiceNavigatorComponent', () => {
  let component: VoiceNavigatorComponent;
  let fixture: ComponentFixture<VoiceNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
