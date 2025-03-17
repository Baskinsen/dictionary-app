import { Component, inject, Input, signal } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Dictionary } from '../../../lib/index';
import { Word } from "../../../types";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'search-bar',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class SearchBar {
    search: string = '';
    error = signal(false);
    Dictionary = inject(Dictionary);
  
    private searchSubject = new Subject<string>();

    constructor() {
        this.searchSubject.pipe(
            debounceTime(300)
        ).subscribe(search => {
            if (search.trim()) { 
                this.Dictionary.searchWord(search).subscribe({
                    next: (data: Word[]) => {  
                        if (data && data.length > 0) {
                            this.Dictionary.updatedWord(data[0]);  
                            console.log(this.Dictionary.word())
                        }
                    },
                    error: (err) => {
                        console.error('Search error:', err);
                        this.Dictionary.updatedWord(null);
                    }
                });
            } else {
                this.Dictionary.updatedWord(null);
            }
        });
    }

    onSearch(event: any) {
        if(event.key === 'Enter'&& event.target.value.trim().length === 0) {
            this.Dictionary.updatedWord(null);
            this.error.set(true)
        } else {
            this.error.set(false)
            let search = event.target.value;
            this.searchSubject.next(search);
        }
    }
}