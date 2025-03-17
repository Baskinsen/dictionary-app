import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dictionary } from '../../../lib';
import { Word, Definitions } from '../../../types';

@Component({
  selector: 'app-word-meaning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-meaning.component.html',
  styleUrl: './word-meaning.component.css'
})
export class WordMeaning {
  Dictionary = inject(Dictionary);
  word = this.Dictionary.word;


  ngOnInit() {
    console.log(this.word());
  }



  getDefinitions(definitions: Definitions[] | undefined): Definitions[] {
    return definitions || [];
  }

  playAudio() {
    if(this.word() && this.word()?.phonetics[0].audio !== null || undefined) {
      let audio = new Audio(this.word()?.phonetics[0].audio);
      // audio.src = this.word()?.phonetics[0].audio;
      audio.play()
    }
     
  }
}
