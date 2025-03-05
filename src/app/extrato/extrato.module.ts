import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoComponent } from './extrato.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ExtratoComponent }];

@NgModule({
  declarations: [ExtratoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ExtratoModule {}
