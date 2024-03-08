// import specific service class
const user_service = require("../../services/");
const fs = require("fs");

const user_controller = {
    add_task: async (req, res) => {
        database_path = "./database/data.json";
        try {
            fs.readFile(database_path, "utf8", (error, database) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send("Error reading JSON file");
                }

                try {
                    const all_tasks = JSON.parse(database);
                    res.render("toDO_list.pug", { all_tasks });
                } catch (parseError) {
                    console.error(parseError);
                    res.status(500).send("Error parsing JSON data");
                }
            });
        } catch (error) {
            res.status(500).render("error", { error: error.message }); // Assuming there's an error.pug
        }
    },
};

module.exports = user_controller;
