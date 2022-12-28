import cors from 'cors';
import express from 'express';
import { bookRouter } from './route/book.router';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRouter);

app.listen(3000, () => {
    console.log('Application started on port 3000!');
});