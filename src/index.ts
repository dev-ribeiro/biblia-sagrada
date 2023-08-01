import * as Types from './@types/bible.js';
import { Bible } from './modules/Bible.js';


export function createBibleInstance(version: Types.BibleVersion) {
  return new Bible(version);
}

export { Types }
