import { createBibleInstance } from '../'
import { describe, it, expect } from 'vitest'

describe('Bible suit', () => {
  it('should be get a chapter', () => {
    const bible = createBibleInstance('nvi')
    const chapter = bible.getChapter('Atos', 2)

    expect(chapter).toBeDefined()

  })

  it('should be not get a chapter if not exists', () => {
    const bible = createBibleInstance('nvi')
    const chapter = bible.getChapter('Atos', 50)

    expect(chapter).toBeNull()
  })
})
