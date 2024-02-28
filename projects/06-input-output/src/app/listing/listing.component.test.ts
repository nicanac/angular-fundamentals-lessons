import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingComponent } from './listing.component';
import { Car } from '../car';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit car when savedCar is called', () => {
    const car: Car = {
      model: 'Test Car',
      make: 'Test Make',
      year: 2022,
      transmission: 'Automatic',
      miles: 10000,
      price: 20000,
    };
    spyOn(component.carSaved, 'emit');
    component.savedCar(car);
    expect(component.carSaved.emit).toHaveBeenCalledWith(car);
  });
});
