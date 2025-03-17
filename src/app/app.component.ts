import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/header/header.component';
import { SearchBar } from './components/SearchBar/search.component';
import { NotFound } from './components/notFound/notFound.component';
import { WordMeaning } from './components/word-meaning/word-meaning.component';
import { Dictionary } from '../lib';
// import { Word } from '../types';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AppHeader, SearchBar, NotFound, WordMeaning],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dictionary-app';
  Word = inject(Dictionary);
  word = this.Word.word;
}
