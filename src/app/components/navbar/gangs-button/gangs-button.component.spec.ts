import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangsButtonComponent } from './gangs-button.component';

describe('GangsButtonComponent', () => {
  let component: GangsButtonComponent;
  let fixture: ComponentFixture<GangsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GangsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GangsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
