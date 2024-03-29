import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../../services/transactions.service';

@Component({
  selector: 'app-register-transactions-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-transactions-form.component.html',
  styleUrl: './register-transactions-form.component.scss',
})
export class RegisterTransactionsFormComponent {
  constructor(private transactionService: TransactionService) {}

  value = new FormControl<string>('');
  type = new FormControl<'entrada' | 'saída'>('entrada');
  description = new FormControl<string>('');

  onSubmit(event: Event) {
    event.preventDefault();

    const data = {
      value: this.value.value as string,
      type: this.type.value as 'entrada' | 'saída',
      description: this.description.value as string,
    };

    this.transactionService.addTransaction(data);

    this.value.setValue('');
    this.type.setValue('entrada');
    this.description.setValue('');
  }
}
