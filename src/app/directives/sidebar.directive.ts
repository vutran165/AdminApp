import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appSidebarToggle]',
})

export class SidebarToggleDirective{

    constructor() {

    }

    @HostListener('click', ['$event'])
    toggleOpen($event: any) {
        $event.preventDefault();
        document.querySelector('.sidebar').classList.toggle('sidebar-hidden');
        document.querySelector('.main-container').classList.toggle('main-container-all');
    }

}