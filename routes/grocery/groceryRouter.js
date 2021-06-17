const express = require('express');
const router = express.Router();

const {
    getAllGroceries,
    createGrocery,
    updateGroceryByID,
    deleteGroceryByID,
    sortByDate,
    getAllPurchased,
} = require('./Controller/groceryController')

router.get('/get-all-groceries', getAllGroceries);

router.post('/create-grocery', createGrocery);

router.put('/update-grocery-by-id/:id', updateGroceryByID);

router.delete('/delete-grocery-by-id/:id', deleteGroceryByID);

router.get('/get-all-groceries/sort-by-date/:sort', sortByDate);

router.get('/get-all-purchased/:isPurchased', getAllPurchased)

module.exports = router;