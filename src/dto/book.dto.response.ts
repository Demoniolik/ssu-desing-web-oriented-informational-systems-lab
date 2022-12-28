export type BookResponse = {
    id: number;
    title: string;
    datePublished: Date;
    description: string;
    amountOfPages: number;
    frontCover: string;
    author: AuthorResponse
}