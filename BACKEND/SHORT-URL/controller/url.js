// it is used to shorten the url and it is installed using npm i shortid
const { shortid } = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is req."});
    const shortID = shortid(8);

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    });
    return res.json({ id: shortID});
}



module.exports = {
    handleGenerateNewShortURL,
};