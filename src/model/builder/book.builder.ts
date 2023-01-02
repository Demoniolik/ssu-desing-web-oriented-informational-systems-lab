class BookBuilder {
    id: number;
    title: string;
    description?: string;
    frontCover?: string;
    author: AuthorSample;

    constructor(
        id: number,
        title: string,
        author: AuthorSample
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    setId(id: number): BookBuilder {
        this.id = id;
        return this;
    }

    setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }

    setDesciption(description: string): BookBuilder {
        this.description = description;
        return this;
    }

    setFrontCover(frontCover: string): BookBuilder {
        this.frontCover = frontCover;
        return this;
    }

    setAuthor(author: AuthorSample): BookBuilder {
        this.author = author;
        return this;
    }

    build = (): BookSample => new BookSample(
        this.id, this.title, this.description,
        this.frontCover, this.author
    );

}