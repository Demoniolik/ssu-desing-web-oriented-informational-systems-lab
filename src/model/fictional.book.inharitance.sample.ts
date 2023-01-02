class FictionalBook extends BookSample {
    authorSignature: string;
    specialProposition: boolean;

    constructor(
        id: number,
        title: string,
        author: AuthorSample,
        description: string,
        frontCover: string,
        authorSignature: string,
        specialProposition: boolean
    ) {
        super(id, title, description, frontCover, author);
        this.authorSignature = authorSignature;
        this.specialProposition = specialProposition;
    }

}