import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimeFromNowDirective } from './time-from-now.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TimeFromNowDirective],
  exports: [TimeFromNowDirective]
})
export class CommonDirectivesModule {}
