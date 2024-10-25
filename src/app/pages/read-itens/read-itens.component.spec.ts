import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadItensComponent } from './read-itens.component';

describe('ReadItensComponent', () => {
  let component: ReadItensComponent;
  let fixture: ComponentFixture<ReadItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
