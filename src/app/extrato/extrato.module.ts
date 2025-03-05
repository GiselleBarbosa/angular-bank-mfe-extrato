  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ExtratoComponent } from './extrato.component';
  import { Routes, RouterModule } from '@angular/router';
  import { ExtratoService } from './services/extrato.service';

  const routes: Routes = [{ path: '', component: ExtratoComponent }];

  @NgModule({
    declarations: [ExtratoComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    providers: [ExtratoService],
  })
  export class ExtratoModule {}
