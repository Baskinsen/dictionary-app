import { Component } from "@angular/core";
import { FontDropdown } from "../fontDropdown/font.component";
import { DarkModeToggle } from "../darkModeToggle/dark.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [FontDropdown, DarkModeToggle]

})

export class AppHeader{
    title = 'angular-test';
    constructor() {
    }
}