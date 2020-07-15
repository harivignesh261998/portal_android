import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsolvePage } from './asolve.page';

describe('AsolvePage', () => {
  let component: AsolvePage;
  let fixture: ComponentFixture<AsolvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsolvePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsolvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
