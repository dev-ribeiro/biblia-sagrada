import { BibleType } from "../@types/bible";

export function randomChapter(bible: BibleType[]) {
  try {
    const chapterKey = bible.map(chapter => chapter.name)

    const randomBook = chapterKey[Math.floor(Math.random() * chapterKey.length)]

    if(!randomBook) throw new Error()

    const selectedBook = bible.find(item => item.name === randomBook)

    if(!selectedBook) throw new Error()

    const randomChapter = Math.floor(Math.random() * selectedBook.chapters.length)

    const verses = selectedBook.chapters[randomChapter]

    const selectedRandomChapter = randomChapter + 1;

    return {
      book: selectedBook.name,
      chapter: selectedRandomChapter,
      verses
    }
  } catch (error) {
    throw error
  }
}
