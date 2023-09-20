import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftwarePage } from './software.page';

describe('SoftwarePage', () => {
  let component: SoftwarePage;
  let fixture: ComponentFixture<SoftwarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
