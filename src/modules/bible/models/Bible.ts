import { BibileVersion, BibleType, IBibleType } from '../../../@types/biblies.js';
import { getBibleByVersion } from '../service/getBibleByVersion.js';


export class Bible implements IBibleType {
    biblie: BibleType[];

    constructor(version: BibileVersion) {
        const selectedBiblie = getBibleByVersion(version);
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
