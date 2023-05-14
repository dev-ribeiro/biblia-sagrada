import { BibileVersion } from '../../../@types/biblies.js';
import { Biblie } from '../models/Biblie.js';

export class BiblieController {
    private controlledBiblie;

    constructor(version: BibileVersion) {
        this.controlledBiblie = new Biblie(version);
    }

    getAllVerses() {
        return this.controlledBiblie.getAllVerses();
    }

    getChapter(book: string, chapter: number) {
        return this.controlledBiblie.getChapter(book, chapter);
    }
}
