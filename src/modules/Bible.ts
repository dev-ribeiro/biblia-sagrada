import { BibleVersion, BibleType, IBibleType, Books } from '../@types/bible.js';
import { CustomError } from '../utils/CustomError.js';
import { getBibleByVersion } from '../utils/getBibleByVersion.js';
import { randomChapter } from '../utils/getRandomChapter.js';


export class Bible implements IBibleType {
  #biblie: BibleType[];

  constructor(version: BibleVersion) {
    const selectedBiblie = getBibleByVersion(version);
    this.#biblie = selectedBiblie;
  }

  getAllVerses() {
    return this.#biblie;
  }

  getBook(bookName: Books): BibleType {
    return this.#biblie.find(book => book.name === bookName)!;
  }

  getChapter(name: Books, chapter: number) {
    try {
      const book = this.#biblie.find(book => book.name === name);
      const selectedChapter = book!.chapters[chapter - 1];

      if (!selectedChapter) throw new CustomError('Chapter not found')

      return selectedChapter;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getRandomChapter() {
    try {
      return randomChapter(this.#biblie)
    } catch (error) {
      throw error
    }
  }
}
