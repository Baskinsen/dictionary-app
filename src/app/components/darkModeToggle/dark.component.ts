import { Component } from "@angular/core";
// import ToggleOn from '../../../assets/icons/toggle-on.svg';

@Component({
    selector: 'dark-mode-toggle',
    templateUrl: './dark.component.html',
    styleUrls: ['./dark.component.css']
})

export class DarkModeToggle{
    darkMode: boolean = false;
    

    onToggleDarkMode(){
        this.darkMode = !this.darkMode;
        this.darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');  
    }
}