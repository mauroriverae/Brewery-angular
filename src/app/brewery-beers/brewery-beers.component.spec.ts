import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryBeersComponent } from './brewery-beers.component';

describe('BreweryBeersComponent', () => {
  let component: BreweryBeersComponent;
  let fixture: ComponentFixture<BreweryBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryBeersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
