const fs = require("fs");

const task_controller = {
    read_tasks: async (req, res) => {
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
            res.status(500).render("error", { error: error.message });
        }
    },

    edit_task: async (req, res) => {
        database_path = "./database/data.json";
        const id = req.params.id;
        fs.readFile(database_path, "utf8", (error, database) => {
            if (error) {
                console.error(error);
                return res.status(500).send("Error reading JSON file");
            }

            try {
                const tasks = JSON.parse(database);
                const task = tasks.find((task) => task.id === parseInt(id));
                if (!task) {
                    return res.status(404).send("Task not found");
                }
                res.render("toDO_list.pug", { task });
            } catch (error) {
                console.error(error);
                res.status(500).send("Error parsing JSON data");
            }
        });
    },
    delete_task: async (req, res) => {
        database_path = "./database/data.json";
        const id = req.params.id;
        console.log(id);
        fs.readFile(database_path, "utf8", (error, database) => {
            if (error) {
                console.error(error);
                return res.status(500).send("Error reading JSON file");
            }

            try {
                let tasks = JSON.parse(database);
                const tasksIndex = tasks.findIndex((task) => task.id === id);

                if (tasksIndex !== -1) {
                    tasks.splice(tasksIndex, 1);

                    fs.writeFile(
                        "./database/data.json",
                        JSON.stringify(tasks, null, 2),
                        (err) => {
                            if (err) {
                                console.error(err);
                                return res
                                    .status(500)
                                    .send("Error deleting task");
                            }
                            res.redirect("/task/to-do");
                        }
                    );
                } else {
                    res.status(404).send("Task not found");
                }
            } catch (parseError) {
                console.error(parseError);
                res.status(500).send("Error parsing JSON data");
            }
        });
    },
};

module.exports = task_controller;
