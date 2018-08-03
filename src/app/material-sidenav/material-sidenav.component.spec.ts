
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialSidenavComponent } from './material-sidenav.component';

describe('MaterialSidenavComponent', () => {
  let component: MaterialSidenavComponent;
  let fixture: ComponentFixture<MaterialSidenavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MaterialSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
