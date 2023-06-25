import { createBibleInstance } from '../'
import { describe, it, expect } from 'vitest'

describe('Bible suit', () => {
  it('should be get a chapter', () => {
    const bible = createBibleInstance('nvi')
    const chapter = bible.getChapter('Êxodo', 2)
    console.log(chapter)
  })
})
