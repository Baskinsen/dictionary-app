import { Component } from "@angular/core";

@Component({
    selector: 'font-dropdown',
    templateUrl: './font.component.html',
    styleUrls: ['./font.component.css']
})

export class FontDropdown{
   fonts= ['Sans', 'Poppins', 'Inter', 'Roboto'];

   selectedFont: string = this.fonts[0];
   showDropdown: boolean = false;
   
   onSelect(font: string){
       this.selectedFont = font;
       window.document.body.style.fontFamily = font;
      
    }

    onToggleDropdown(){
        this.showDropdown = !this.showDropdown;
    }
}