import express from "express";
import products from "./data.js";

const app = express();

app.use(express.static("./client"))

//Middleware:
const auth = (req, res, next) => {
    const { username } = req.query;
    if(username !== "Gowtham"){
        res.status(404).json({success: false, message: "Invalid User"})
    } else {
        next();
    }
};

app.use(auth);

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "JSON List Data" })
});

app.get("/api/v1/products", (req, res) => {
    res.status(200).json({ success: true, data: products })
});

app.get("/api/v1/productDetail", (req, res) => {
    const filteredData = products.map(({ id, title, description }) => {
        return {
            id,
            title,
            description
        }
    });
    res.status(200).json({ success: true, data: filteredData });
});

app.get("/api/v1/products/query", (req, res) => {
    const { search, limit } = req.query;
    const filterProducts = products.filter(prod => prod.title.toLocaleLowerCase().startsWith(search))
    if (filterProducts.length > 0) {
        let limitfilterProducts = filterProducts.slice(0, limit)
        res.status(200).json({ success: true, data: limitfilterProducts })
    } else {
        res.status(200).json({ success: true, data: filterProducts })
    }
});

app.get("/api/v1/products/:id", (req, res) => {
    const id = req.params.id;
    const findProduct = products.find(x => x.id == id);
    if (!findProduct) return res.status(404).json({ success: false, message: "Not Data Found" });
    res.status(200).json({ success: true, data: findProduct })
});

app.listen(5000, () => {
    console.log("SERVER STARTED")
});