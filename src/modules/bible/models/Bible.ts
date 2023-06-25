import { BibleVersion, BibleType, IBibleType, Books } from '../../../@types/biblies.js';
import { getBibleByVersion } from '../service/getBibleByVersion.js';


export class Bible implements IBibleType {
    biblie: BibleType[];

    constructor(version: BibleVersion) {
        const selectedBiblie = getBibleByVersion(version);
        this.biblie = selectedBiblie;
    }

    getAllVerses() {
        return this.biblie;
    }

    getChapter(name: Books, chapter: number) {
        const book = this.biblie.filter(book => book.name === name);
        const selectedChapter = book[0].chapters[chapter - 1];

        return selectedChapter;
    }
}
