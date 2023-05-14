export type BibileVersion = "nvi" | "aa" | "acf"

export interface BiblieType {
    name: string;
    chapters: string[];
}

export interface IBiblieType {
    biblie: BiblieType[];
    getAllVerses: () => any;
    getChapter: (param: string, chapter: number) => any;
}
