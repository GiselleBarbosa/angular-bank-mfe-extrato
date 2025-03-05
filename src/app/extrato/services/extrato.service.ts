import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  saldo = signal<number>(15000)
  extrato = signal<{ descricao: string; valor: number }[]>([]);

  adicionarExtrato(novoItem: { descricao: string; valor: number }) {
    this.extrato.set([...this.extrato(), novoItem]);
  } 

  atualizarSaldo(valor: number) {
    this.saldo.update((saldoAtual) => saldoAtual + valor);
  }
}
