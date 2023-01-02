import { db } from "../configuration/data.source.configuration"
import type { AuthorRequest } from "../dto/author.dto.request";
import type { AuthorResponse } from "../dto/author.dto.response";

export const getAllAuthors = async (): Promise<AuthorResponse[]> => {
    return db.author.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            country: true,
        }
    });
}

export const getAuthorByFullName = async (firstName: string, lastName: string): Promise<AuthorResponse | null> => {
    return db.author.findFirst({
        where: {
            firstName,
            lastName,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            country: true,
        }
    });
}

export const createAuthor = async (author: AuthorRequest): Promise<AuthorResponse> => {
    const { firstName, lastName, country } = author;

    return db.author.create({
        data: {
            firstName,
            lastName,
            country,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            country: true,
        }
    });
}
export const deleteAuthor = async (id: number): Promise<void> => {
    await db.author.delete({
        where: {
            id,
        },
    });
};