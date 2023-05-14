import { BibileVersion, BiblieType, IBiblieType } from '../../../@types/biblies.js';
import { getBiblieByVersion } from '../service/getBiblieByVersion.js';

export class Biblie implements IBiblieType {
    biblie: BiblieType[];

    constructor(version: BibileVersion) {
        const selectedBiblie = getBiblieByVersion(version);
        this.biblie = selectedBiblie;
    }

    getAllVerses() {
        console.log(this.biblie);
        return this.biblie;
    }

    getChapter(name: string, chapter: number) {
        const book = this.biblie.filter(book => book.name === name);
        const selectedChapter = book[0].chapters[chapter - 1];

        return selectedChapter;
    }
}
