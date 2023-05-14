import { BibileVersion } from './@types/biblies.js';
import { BiblieController } from './modules/biblie/controllers/BiblieController.js';

export function createBiblieInstance(version: BibileVersion) {
    return new BiblieController(version);
}
