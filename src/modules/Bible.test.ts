import { createBibleInstance } from '..'
import { describe, it, expect } from 'vitest'

describe('Bible suit', () => {
  it('should be get a book', () => {
    const bible = createBibleInstance('nvi')
    const book = bible.getBook('1 João')

    expect(book).toBeDefined()

    expect(book.name).toEqual('1 João')
  })

  it('should be get a chapter', () => {
    const bible = createBibleInstance('nvi')
    const chapter = bible.getChapter('Obadias', 1)

    expect(chapter).toBeDefined()

  })

  it('should be get a random chapter', () => {
    const bible = createBibleInstance('nvi');

    const randomChapter = bible.getRandomChapter()

    expect(randomChapter).toBeDefined();
  })

  it('should be not get a chapter if not exists', () => {
    const bible = createBibleInstance('nvi')
    const chapter = bible.getChapter('Atos', 50)

    expect(chapter).toBeNull()
  })
})
