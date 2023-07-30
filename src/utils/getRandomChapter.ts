import { BibleType } from "../@types/bible";

export function randomChapter(bible: BibleType[]) {
  const chapterKey = bible.map(chapter => chapter.name)
  const randomBook = chapterKey[~~(Math.random() * chapterKey.length)]
  const selectedBook = bible.find(item => item.name === randomBook)

  const randomChapter = ~~(Math.random() * selectedBook!.chapters.length)

  const verses = selectedBook!.chapters[randomChapter - 1]

  return {
    book: selectedBook!.name,
    chapter: randomChapter,
    verses
  }
}
