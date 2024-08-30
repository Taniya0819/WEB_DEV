const express = require('express');
const { handleGenerateNewShortURL } = require('../controller/url');
const router = express.Router();
// An Express router is a way to modularize and organize routes.
// It provides methods for defining HTTP routes (GET, POST, PUT, DELETE, etc.) 
// and middleware for handling requests.

router.post("/",handleGenerateNewShortURL);
// router.get("/", (req,res) => {
//   res.send("This is Home Page");
// }
// )

module.exports = router;