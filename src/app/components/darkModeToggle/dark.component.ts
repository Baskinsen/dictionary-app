import { Component } from "@angular/core";
// import ToggleOn from '../../../assets/icons/toggle-on.svg';

@Component({
    selector: 'dark-mode-toggle',
    templateUrl: './dark.component.html',
    styleUrls: ['./dark.component.css']
})

export class DarkModeToggle{
    darkMode: boolean = false;
    
    constructor(){
        this.darkMode =  window.matchMedia('(prefers-color-scheme:dark)').matches ? true : false;
        this.darkMode ? document.documentElement.setAttribute("data-theme",'dark'): document.documentElement.setAttribute("data-theme", 'light')
    
    }

    onToggleDarkMode(){
        this.darkMode = !this.darkMode;
        this.darkMode ? document.documentElement.setAttribute("data-theme",'dark'): document.documentElement.setAttribute("data-theme",'light');  
    }
}