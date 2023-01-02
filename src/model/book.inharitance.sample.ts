class BookSample {
    public id: number;
    public title: string;
    public description: string | undefined;
    public frontCover: string | undefined;
    public author: AuthorSample;

    constructor
        (
            id: number,
            title: string,
            description: string | undefined,
            frontCover: string | undefined,
            author: AuthorSample
        ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.frontCover = frontCover;
    }

}