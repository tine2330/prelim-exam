const express = require("express");
const books = require("./books");

const app = express();

const PORT = 3000;

const API_KEY = "2026-X7K9P4M2!$Aa";

app.use("/api", (req, res, next) => {

    const key = req.headers["x-api-key"];

    if (!key) {
        return res.status(401).json({
            message: "Unauthorized - API Key Required"
        });
    }

    if (key !== API_KEY) {
        return res.status(401).json({
            message: "Unauthorized - Invalid API Key"
        });
    }

    next();
});

app.get("/api/books", (req, res) => {

    res.json({
        message: "Books retrieved successfully",
        data: books
    });

});

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});