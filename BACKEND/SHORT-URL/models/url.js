const mongoose = require('mongoose');
urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    // visitHistory ek array of objects hoga
    visitHistory:[{ timestamp: {type: Number} }],
    },
    {timestamps: true}
// This option automatically adds two fields to the schema:
// createdAt: A timestamp for when the document was created.
// updatedAt: A timestamp for when the document was last updated.
);

const URL = mongoose.model("url", urlSchema);
// const mongoose.model(name, schema) is a function provided by Mongoose that creates a model based on a schema.
//  A model is a constructor function that provides the ability to create and manage documents within a specific MongoDB collection.

module.exports = URL;