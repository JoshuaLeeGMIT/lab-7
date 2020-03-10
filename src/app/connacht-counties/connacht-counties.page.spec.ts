import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnachtCountiesPage } from './connacht-counties.page';

describe('ConnachtCountiesPage', () => {
  let component: ConnachtCountiesPage;
  let fixture: ComponentFixture<ConnachtCountiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnachtCountiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnachtCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
