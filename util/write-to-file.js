const fs = require("fs");
const path = require("path");

module.exports = (data) => {
    console.log("the data to write in file :", data);
    try {
    fs.writeFileSync(path.join(__dirname, "..", "date", "movies.json"), JSON.stringify(data),"utf8");
    } catch(err) {
        console.log(err);
    }
}