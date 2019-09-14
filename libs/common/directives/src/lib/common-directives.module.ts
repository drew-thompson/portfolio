import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollingMonitorDirective } from './scrolling-monitor.directive';
import { TimeFromNowDirective } from './time-from-now.directive';

@NgModule({
  imports: [CommonModule, ScrollingModule],
  declarations: [TimeFromNowDirective, ScrollingMonitorDirective],
  exports: [TimeFromNowDirective, ScrollingMonitorDirective]
})
export class CommonDirectivesModule {}
