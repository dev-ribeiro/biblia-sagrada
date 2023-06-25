import { BibleController } from '../modules/bible/controllers/BibleController'
import { randomChapter } from './getRandomChapter'
import { describe, it, expect } from 'vitest'

describe('Get random chapter', () => {
  it('should be return a random chapter', () => {
    const bible = new BibleController('nvi')
    const data = bible.getAllVerses()
    const chapter = randomChapter(data)

    expect(chapter).toBeDefined()
  })
})
