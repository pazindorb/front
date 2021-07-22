import { TestBed } from '@angular/core/testing';
import { SortIndicatorComponent } from './sort-indicator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SortIndicatorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SortIndicatorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'polsourceapp'`, () => {
  //   const fixture = TestBed.createComponent(NoteDetailsComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('polsourceapp');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SortIndicatorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('polsourceapp app is running!');
  });
});
