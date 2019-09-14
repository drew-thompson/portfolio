import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CommonUiHeaderModule {}
