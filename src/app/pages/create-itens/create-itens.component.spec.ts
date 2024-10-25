import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItensComponent } from './create-itens.component';

describe('CreateItensComponent', () => {
  let component: CreateItensComponent;
  let fixture: ComponentFixture<CreateItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
