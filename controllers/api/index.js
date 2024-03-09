// import specific service class
const task_service = require("../../services/");

const task_controller = {
    // Adding new task
    add_task: async (req, res) => {
        try {
            const task = await task_service.insert(req);
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    edit_task: async (req, res) => {
        try {
            const task = await task_service.edit_task(req);
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = task_controller;
