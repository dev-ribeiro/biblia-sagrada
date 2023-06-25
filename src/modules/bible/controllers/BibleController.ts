import { BibleVersion, Books } from '../../../@types/biblies.js';
import { Bible } from '../models/Bible.js';


export class BibleController {
    private controlledBible;

    constructor(version: BibleVersion) {
        this.controlledBible = new Bible(version);
    }

    getAllVerses() {
        return this.controlledBible.getAllVerses();
    }

    getChapter(book: Books, chapter: number) {
        return this.controlledBible.getChapter(book, chapter);
    }
}
