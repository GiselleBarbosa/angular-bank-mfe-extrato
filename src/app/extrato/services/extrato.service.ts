import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  extrato = signal<{ descricao: string; valor: number }[]>([]);

  adicionarExtrato(novoItem: { descricao: string; valor: number }) {
    this.extrato.set([...this.extrato(), novoItem]);
  }
}
