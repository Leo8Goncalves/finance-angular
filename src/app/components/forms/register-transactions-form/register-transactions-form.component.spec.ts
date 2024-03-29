import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTransactionsFormComponent } from './register-transactions-form.component';

describe('RegisterTransactionsFormComponent', () => {
  let component: RegisterTransactionsFormComponent;
  let fixture: ComponentFixture<RegisterTransactionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTransactionsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterTransactionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
