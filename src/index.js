import { BiblieController } from './modules/biblie/controllers/BiblieController.js';

export function createBiblieInstance(version) {
    return new BiblieController(version);
}
