import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav: MatSidenav;

  constructor() {}

  set(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  get(): MatSidenav {
    return this.sidenav;
  }

  toggle() {
    return this.sidenav.toggle();
  }

  close() {
    return this.sidenav.close();
  }

  open() {
    return this.sidenav.open();
  }
}
