const { readJSONFile, writeJSONFile } = require("./src/helpers.js");
const {
    findItemDetails,
    removeFromInventory,
    addToInventory,
    checkInventory,
    underThree
} = require("./src/organics.js")

const run = () => {

    const action = process.argv[2];
    const input = process.argv[3];
    let organicsData = readJSONFile("./data", "organicsData")
    let writeToFile = false;
    let updatedOrganics = [];

    switch (action) {

    }

}