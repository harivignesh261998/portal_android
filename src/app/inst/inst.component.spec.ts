import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstComponent } from './inst.component';

describe('InstComponent', () => {
  let component: InstComponent;
  let fixture: ComponentFixture<InstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
