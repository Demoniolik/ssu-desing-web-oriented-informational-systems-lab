import express from 'express';

const app = express();

// app.use(mealRouter);

app.listen(3000, () => {
    console.log('Application started on port 3000!');
});