import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, TranslateModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class CommonUiSidenavModule {}
