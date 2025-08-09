import foodModel from "../models/foodModel.js";
import fs from "fs";


//add food item

const addFood = async (req, res) => {
    // Pour récupérer le nom du fichier, pas besoin de template string, juste req.file.filename
    let image_filename = req.file ? req.file.filename : null;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error" });
    }
};

export {addFood}