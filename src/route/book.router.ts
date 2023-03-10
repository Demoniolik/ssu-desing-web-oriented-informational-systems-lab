import expres from "express";
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { createBook, deleteBook, getAllBooks, getBookByTitle } from "../repository/book.repository";

export const bookRouter = expres.Router();

bookRouter.get("/",
    async (_request: Request, response: Response) => {
        try {
            const books = await getAllBooks();

            return response
                .status(HttpStatus.OK)
                .json(books);
        } catch (error: any) {
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    });

bookRouter.get("/:title",
    async (request: Request, response: Response) => {
        const title = request.params.title;

        try {
            const book = await getBookByTitle(title);

            if (book) {
                return response
                    .status(HttpStatus.OK)
                    .json(book);
            }

            return response
                .status(HttpStatus.NOT_FOUND)
                .json("Book by given title was not found");
        } catch (error: any) {
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    });

bookRouter.post("/",
    async (request: Request, response: Response) => {
        try {
            const book = request.body;
            const createdBook = await createBook(book);

            return response
                .status(HttpStatus.CREATED)
                .json(createdBook)
        } catch (error: any) {
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    });

bookRouter.delete("/:id",
    async (request: Request, response: Response) => {
        const id: number = parseInt(request.params.id);
        try {
            await deleteBook(id);

            return response
                .status(204)
                .json("Book was successfully deleted");
        } catch (error: any) {
            return response
                .status(500)
                .json(error.message);
        }
    });