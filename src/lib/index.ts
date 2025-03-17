import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, signal } from "@angular/core";
import { Word } from "../types";

@Injectable({ providedIn: 'root' })
export class Dictionary {
    word = signal<Word | null>(null);
    constructor(private http: HttpClient) {}

    searchWord(word: string): Observable<Word[]> {
        return this.http.get<Word[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    }

    updatedWord(newWord: Word |null) {
        this.word.set(newWord);
    }
}


