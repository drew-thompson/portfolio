import { CdkScrollable } from '@angular/cdk/scrolling';
import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[scrollingMonitor]'
})
export class ScrollingMonitorDirective implements OnInit {
  @Input() scrollingMonitor: CdkScrollable;

  @Output() reachedTop: EventEmitter<boolean> = new EventEmitter<boolean>();

  wasAtTop: boolean;

  ngOnInit() {
    this.emitTop();
    this.scrollingMonitor.elementScrolled().subscribe(() => this.emitTop());
  }

  private emitTop(): void {
    const top = this.scrollingMonitor.measureScrollOffset('top');
    const atTop = top === 0;
    if (this.wasAtTop || atTop) {
      this.reachedTop.emit(atTop);
    }
    this.wasAtTop = atTop;
  }
}
