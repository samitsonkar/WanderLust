const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => console.log("connected"))
.catch(err => console.log("not connected"))

initDB();

async function initDB() {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "661142fb79557ace92f12d70" }));
    await Listing.insertMany(initData.data)
    console.log("saved");
}

async function main() {
    await mongoose.connect("mongodb+srv://demouser:6sgF41253FDwoWHi@cluster0.erfrycw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}