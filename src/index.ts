import { BibleVersion } from './@types/bible.js';
import { Bible } from './modules/Bible.js';


export function createBibleInstance(version: BibleVersion) {
    return new Bible(version);
}
