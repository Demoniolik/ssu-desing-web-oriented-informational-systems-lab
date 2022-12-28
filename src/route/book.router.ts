import expres from "express";
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";


export const restaurantRouter = expres.Router();

// const catalogService = new CatalogService();

const GET_ALL_RESTAURANTS = "/catalog/find/restaurants";

restaurantRouter.get(GET_ALL_RESTAURANTS,
    (_request: Request, response: Response) => {
        // let restaurants = catalogService.getAllRestaurants();
        // restaurants.then(result => {
        //     response
        //         .status(HttpStatus.OK)
        //         .json(result);
        // });
    });
