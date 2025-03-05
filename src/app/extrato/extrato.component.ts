import { Component } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent {
  extrato = [
    { descricao: 'Depósito', valor: 1000 },
    { descricao: 'Compra Mercado', valor: -200 },
  ];
}
