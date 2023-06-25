export type BibleVersion = "nvi" | "aa" | "acf"

export interface BibleType {
    name: string;
    chapters: string[];
}

export interface IBibleType {
    biblie: BibleType[];
    getAllVerses: () => any;
    getChapter: (param: string, chapter: number) => any;
}
