import expres from "express";
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorByFullName } from "../repository/author.repository";


export const authorRouter = expres.Router();

authorRouter.get("/",
    async (_request: Request, response: Response) => {
        try {
            const books = await getAllAuthors();

            return response
                .status(HttpStatus.OK)
                .json(books);
        } catch (error: any) {
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    });

authorRouter.get("/find",
    async (request: Request, response: Response) => {
        const firstName = request.query.firstName as string;
        const lastName = request.query.lastName as string;

        try {
            const author = await getAuthorByFullName(firstName, lastName);

            if (author) {
                return response
                    .status(HttpStatus.OK)
                    .json(author);
            }

            return response
                .status(HttpStatus.NOT_FOUND)
                .json("Author by given first name and last name was not found");
        } catch (error: any) {
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    });

authorRouter.post("/",
    async (request: Request, response: Response) => {
        try {
            const author = request.body;
            const createdAuthor = await createAuthor(author);

            return response
                .status(HttpStatus.CREATED)
                .json(createdAuthor)
        } catch (error: any) {
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    });

authorRouter.delete("/:id",
    async (request: Request, response: Response) => {
        const id: number = parseInt(request.params.id);

        try {
            await deleteAuthor(id);
            return response
                .status(204)
                .json("Author was successfully deleted");
        } catch (error: any) {
            return response
                .status(500)
                .json(error.message);
        }
    });