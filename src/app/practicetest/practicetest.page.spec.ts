import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PracticetestPage } from './practicetest.page';

describe('PracticetestPage', () => {
  let component: PracticetestPage;
  let fixture: ComponentFixture<PracticetestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticetestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PracticetestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
