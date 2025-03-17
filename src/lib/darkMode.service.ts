

import { HttpClient } from "@angular/common/http";

import { Injectable, signal } from "@angular/core";


@Injectable({ providedIn: 'root' })

export class DarkMode {
  darkMode = signal<boolean>(false);
    // constructor(private http: HttpClient) {}

    toggleDarkMode() {
        this.darkMode.set(!this.darkMode());
    }
}