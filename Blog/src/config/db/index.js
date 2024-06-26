const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/tutorial_web", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //   useCreateIndex: true,
        });
        console.log("Connect successfully!!!");
    } catch (error) {
        console.log("Connect failure!!!");
    }
}

module.exports = { connect };
