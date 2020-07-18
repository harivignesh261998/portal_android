import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolvePage } from './solve.page';

describe('SolvePage', () => {
  let component: SolvePage;
  let fixture: ComponentFixture<SolvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
