import expres from "express";
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { createBook, getAllBooks, getBookById } from "../repository/book.repository";


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

bookRouter.get("/:id",
    async (request: Request, response: Response) => {
        const bookId: number = parseInt(request.params.id);
        try {
            const book = await getBookById(bookId);
            if (book) {
                return response
                    .status(HttpStatus.OK)
                    .json(book);
            }
            return response
                .status(HttpStatus.NOT_FOUND)
                .json("Book by given id was not found");
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
