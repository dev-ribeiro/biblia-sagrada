import { BibleVersion, Books } from '../../../@types/biblies.js';
import { CustomError } from '../../../utils/CustomError.js';
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
    try {
      return this.controlledBible.getChapter(book, chapter);
    } catch (error) {
      if (error instanceof CustomError) {
        console.error(error.message)
      } else {
        console.error(error)
      }

      return null
    }
  }
}
