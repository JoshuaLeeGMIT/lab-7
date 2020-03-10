import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnachtPage } from './connacht.page';

describe('ConnachtPage', () => {
  let component: ConnachtPage;
  let fixture: ComponentFixture<ConnachtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnachtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnachtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
