import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsolvePage } from './csolve.page';

describe('CsolvePage', () => {
  let component: CsolvePage;
  let fixture: ComponentFixture<CsolvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsolvePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsolvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
