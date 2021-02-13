import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule,
  NbInputModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...NB_MODULES],
  exports: [...NB_MODULES],
})
export class NebularModule {}
