import { getBiblieByVersion } from '../service/getBiblieByVersion.js';

export class Biblie {
    biblie;

    constructor(version) {
        const selectedBiblie = getBiblieByVersion(version);
        this.biblie = selectedBiblie;
    }

    getAllVerses() {
        return this.biblie;
    }

    getChapter(name, chapter) {
        const book = this.biblie.filter(book => book.name === name);
        const selectedChapter = book[0].chapters[chapter - 1];

        return selectedChapter;
    }
}
