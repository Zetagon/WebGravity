'use strict'
import mongoose = require('mongoose');

let shoppingItemSchema = new mongoose.Schema({
    name: String,
    needMore: Boolean
});

let shoppingListSchema = new mongoose.Schema({
    group: String,
    items: [shoppingItemSchema]
});

export = mongoose.model('shoppingList', shoppingListSchema);
