import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCodeComponent } from './menu-code.component';

describe('MenuCodeComponent', () => {
  let component: MenuCodeComponent;
  let fixture: ComponentFixture<MenuCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
