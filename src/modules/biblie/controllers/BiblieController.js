import { Biblie } from '../models/Biblie.js';

export class BiblieController {
    controlledBiblie;

    constructor(version) {
        this.controlledBiblie = new Biblie(version);
    }

    getAllVerses() {
        return this.controlledBiblie.getAllVerses();
    }

    getChapter(book, chapter) {
        return this.controlledBiblie.getChapter(book, chapter);
    }
}
