import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { InstrutorComponent } from './instrutor/instrutor.component';
import { TurmaComponent } from './turma/turma.component';

@NgModule({
  declarations: [CursoComponent, InstrutorComponent, TurmaComponent],
  imports: [
    CommonModule
  ]
})
export class WebsiteModule { }
