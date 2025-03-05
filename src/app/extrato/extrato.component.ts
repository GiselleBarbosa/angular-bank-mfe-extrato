import { Component, inject } from '@angular/core';
import { ExtratoService } from './services/extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  extratoService = inject(ExtratoService);
  saldo = this.extratoService.saldo;

  extrato = [
    { descricao: 'Depósito', valor: 1000 },
    { descricao: 'Compra Mercado', valor: -200 },
  ];
}
