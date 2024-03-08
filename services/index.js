const fs = require("fs");
const database = require(global.database);

// write service method implementations
const user_service = {
    get(req, res) {
        return database;
    },
    insert(req, res) {

        const body = req.body;
        console.log(body)

        const toDO_list = {
            textInput: body.textInput,
            dateInput: body.dateInput,
            textarea: body.textarea,
        };

        database.unshift({
            task: toDO_list,
        });

        writeToFile(database);

        return {
            task: toDO_list,
        };
    },
};



let writeToFile = async (database) => {
    await fs.writeFileSync(
        global.database,
        JSON.stringify(database, null, 4),
        "utf8"
    );
};

module.exports = user_service;
