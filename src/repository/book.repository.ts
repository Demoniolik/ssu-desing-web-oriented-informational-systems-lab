import { db } from "../configuration/data.source.configuration"
import { BookRequest } from "../dto/book.dto.request";
import type { BookResponse } from "../dto/book.dto.response";

export const getAllBooks = async (): Promise<BookResponse[]> => {
    return db.book.findMany({
        select: {
            id: true,
            title: true,
            datePublished: true,
            description: true,
            amountOfPages: true,
            frontCover: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    country: true,
                }
            }
        }
    });
}

export const getBookByTitle = async (title: string): Promise<BookResponse | null> => {
    return db.book.findFirst({
        where: {
            title,
        },
        select: {
            id: true,
            title: true,
            datePublished: true,
            description: true,
            amountOfPages: true,
            frontCover: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    country: true,
                }
            }
        }
    });
}

export const createBook = async (book: BookRequest): Promise<BookResponse> => {
    const { title, authorId, datePublished, description, frontCover, amountOfPages } = book;
    const parsedDate: Date = new Date(datePublished);

    return db.book.create({
        data: {
            title,
            authorId,
            datePublished: parsedDate,
            description,
            frontCover,
            amountOfPages,
        },
        select: {
            id: true,
            title: true,
            datePublished: true,
            description: true,
            amountOfPages: true,
            frontCover: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    country: true,
                }
            }
        }
    });
}
export const deleteBook = async (id: number): Promise<void> => {
    await db.book.delete({
        where: {
            id,
        },
    });
};