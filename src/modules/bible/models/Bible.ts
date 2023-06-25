import { BibleVersion, BibleType, IBibleType, Books } from '../../../@types/biblies.js';
import { CustomError } from '../../../utils/CustomError.js';
import { getBibleByVersion } from '../../../utils/getBibleByVersion.js';


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
    try {
      const book = this.biblie.filter(book => book.name === name);
      const selectedChapter = book[0].chapters[chapter - 1];

      if(!selectedChapter) throw new CustomError('Chapter not found')

      return selectedChapter;
    } catch (error) {
      throw error
    }
  }
}
