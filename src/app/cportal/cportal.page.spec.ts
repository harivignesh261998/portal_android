import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CportalPage } from './cportal.page';

describe('CportalPage', () => {
  let component: CportalPage;
  let fixture: ComponentFixture<CportalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CportalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CportalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
