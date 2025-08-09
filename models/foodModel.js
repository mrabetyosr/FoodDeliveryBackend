import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {typee:String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image:{type: String, required: true},
    category: {type:String, required: true},

});

const FoodModel = mongoose.models.food || mongoose.model("Food", foodSchema);

export default FoodModel;
