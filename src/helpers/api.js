import axios from "axios";
import { Product } from "../models/ProductObject";

let apiUrl = "https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev";
let awsKey = "A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A";

export async function getProducts(guid, limit = 10, pageNumber = 1, query = "", sort = "") {
    try {
        const response = await axios.get(apiUrl + "/offers/all/" + guid + "?items=" + limit + "&page=" + pageNumber + query + sort, {
            headers: {
                "x-api-key": awsKey,
            },
        });

        const prodList = [];
        response.data.offers.map((item, key) => {
            prodList.push(new Product(item));
        });
        return prodList;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getNewProducts(guid, limit = 10, pageNumber = 1, query = "", sort = "") {
    try {
        const response = await axios.get(apiUrl + "/offers/fetch/" + guid + "?items=" + limit + "&page=" + pageNumber + query + sort, {
            headers: {
                "x-api-key": awsKey,
            },
        });

        const prodList = [];
        response.data.offers.map((item, key) => {
            prodList.push(new Product(item));
        });
        return prodList;
    } catch (error) {
        console.log(error);
        return null;
    }
}
