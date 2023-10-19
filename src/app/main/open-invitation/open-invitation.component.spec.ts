import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInvitationComponent } from './open-invitation.component';

describe('OpenInvitationComponent', () => {
  let component: OpenInvitationComponent;
  let fixture: ComponentFixture<OpenInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenInvitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
