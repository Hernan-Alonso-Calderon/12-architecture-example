import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 menu items', () => {
    const menuItems = fixture.debugElement.queryAll(By.css('.home__menu li'));
    expect(menuItems.length).toBe(4);
  });

  it('should have correct links for each menu item', () => {
    const expectedLinks = ['/customers', '/menus', '/dishes', '/orders'];
    const links = fixture.debugElement.queryAll(By.css('.home__link'));

    expect(links.length).toBe(4);
    links.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('ng-reflect-router-link')).toBe(
        expectedLinks[index]
      );
    });
  });
});
