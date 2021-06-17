const Grocery = require('../model/Grocery');

async function getAllGroceries(req, res, next){
    try{
        let foundAllGroceries = await Grocery.find({}).sort({priority: -1});
        res.json({message: "success", payload: foundAllGroceries})
    }catch(e){
        res.json({message: "error", error: e})
    }
}

async function createGrocery(req, res, next){
    try{
        const newGrocery = new Grocery({
            grocery: req.body.grocery,
        })
        const createdGrocery = await newGrocery.save();
        res.json({message: "Grocery Created", payload: createdGrocery})
    }catch(e){
        res.json({message: "error", error: e})
    }
}

async function updateGroceryByID(req, res, next){
    try{
        const updatedGrocery = await Grocery.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({message: 'Grocery Updated', payload: updatedGrocery});
    }catch(e){
        res.json({message: 'error', error: e})
    }
}

async function deleteGroceryByID(req, res, next){
    try{
        const deletedGrocery = await Grocery.findByIdAndRemove(req.params.id);
        res.json({message: "Grocery Deleted", payload: deletedGrocery})
    }catch(e){
        res.json({message: "error", error: e})
    }
}

async function sortByDate(req, res, next){
    try{
        const sortedArray = await Grocery.find({}).sort({Date: req.params.sort})
        res.json({message: "list sorted!", payload: sortedArray})
    }catch(e){
        res.json({message: "error", error: e})
    }
}

async function getAllPurchased(req,res, next){
    try{
        const newArray = await Grocery.find({purchased: req.params.isPurchased});
        res.json({message: "new list created", payload: newArray});
    }catch(e){
        res.json({message: error, error: e})
    }
}

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGroceryByID,
    deleteGroceryByID,
    sortByDate,
    getAllPurchased,
}