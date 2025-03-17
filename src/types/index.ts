export interface Word {
   license: {word: string; url: string};
   word: string;
    phonetic: string;
    meanings: {
        partOfSpeech: string;
        definitions: Definitions[]
        synonyms: string[];
        antonyms: string[];
    }[]
    sourceUrls: string[];
    phonetics: {
        text: string;
        audio: string;
    }[]
    

}


export interface Definitions {
    definition: string;
    example: string;
    synonyms: string[];
    antonyms: string[];
}

interface Examples {

}