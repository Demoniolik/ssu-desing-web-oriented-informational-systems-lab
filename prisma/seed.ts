import { db } from "../src/configuration/data.source.configuration";

async function seed() {
  await Promise.all(
    getAuthors().map((author) => {
      const { firstName, lastName, country } = author;
      return db.author.create({
        data: {
          firstName,
          lastName,
          country,
        },
      });
    })
  );

  await Promise.all(
    getBooks().map((book) => {
      const { title, amountOfPages, datePublished, frontCover, authorId, description } = book;
      return db.book.create({
        data: {
          title,
          datePublished,
          authorId,
          amountOfPages,
          frontCover,
          description,
        },
      });
    })
  );
}

seed();

function getAuthors(): Array<Author> {
  return [
    {
      firstName: "John",
      lastName: "Doe",
      country: "1"
    },
    {
      firstName: "William",
      lastName: "Shakespeare",
      country: "1"
    },
    {
      firstName: "Yuval Noah",
      lastName: "Harari",
      country: "1"
    },
  ];
}

function getBooks(): Array<Book> {
  return [
    {
      title: "Sapiens",
      description: "1",
      amountOfPages: 12,
      frontCover: "12",
      authorId: 1,
      datePublished: new Date(),
    },
    {
      title: "Homo Deus",
      description: "1",
      amountOfPages: 12,
      frontCover: "12",
      authorId: 2,
      datePublished: new Date(),
    },
    {
      title: "The Ugly Duckling",
      description: "1",
      amountOfPages: 12,
      frontCover: "12",
      authorId: 3,
      datePublished: new Date(),
    },
  ];
}
