const fs = require("fs");
const database = require(global.database);

// write service method implementations
const task_service = {
    get(req, res) {
        return database;
    },
    insert(req, res) {
        let new_id = genRandId(7);
        const body = req.body;
        console.log(body);

        const task = {
            textInput: body.textInput,
            dateInput: body.dateInput,
            textarea: body.textarea,
        };

        database.unshift({
            id: new_id,
            task: task,
        });

        writeToFile(database);

        return {
            id: new_id,
            task: task,
        };
    },

    update(req, res) {
        const id = req.params.id;
        const body = req.body;
        console.log(id);
        const index = database.findIndex((item) => item.id === id);

        if (index !== -1) {
            database[index].task.textInput = body.textInput;
            database[index].task.dateInput = body.dateInput;
            database[index].task.textarea = body.textarea;

            writeToFile(database);

            return database[index];
        } else {
            return null; // Task with given ID not found
        }
    },
};

let writeToFile = async (database) => {
    await fs.writeFileSync(
        global.database,
        JSON.stringify(database, null, 4),
        "utf8"
    );
};

let genRandId = (count) => {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
};

module.exports = task_service;
