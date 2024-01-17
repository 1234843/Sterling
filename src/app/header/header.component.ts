import { Component, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  showServicesDropdown = false;
  showTechnologiesDropdown = false;
  showDropdown= false;
  openNav() {
    const sideNav = this.el.nativeElement.querySelector('#mySidenav');
    this.renderer.setStyle(sideNav, 'width', '250px');
  }

  closeNav() {
    const sideNav = this.el.nativeElement.querySelector('#mySidenav');
    this.renderer.setStyle(sideNav, 'width', '0');
  }
}
