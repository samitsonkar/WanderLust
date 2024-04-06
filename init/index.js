const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => console.log("connected"))
.catch(err => console.log("not connected"))

initDB();

async function initDB() {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "66068702d26a980b76483776" }));
    await Listing.insertMany(initData.data)
    console.log("saved");
}

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}