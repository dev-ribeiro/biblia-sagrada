import { BibileVersion } from '../../../@types/biblies.js';
import { Bible } from '../models/Bible.js';


export class BibleController {
    private controlledBible;

    constructor(version: BibileVersion) {
        this.controlledBible = new Bible(version);
    }

    getAllVerses() {
        return this.controlledBible.getAllVerses();
    }

    getChapter(book: string, chapter: number) {
        return this.controlledBible.getChapter(book, chapter);
    }
}
