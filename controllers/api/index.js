// import specific service class
const user_service = require("../../services/");

const user_controller = {
    // Adding new task
    add_task: async (req, res) => {
        try {
            const task = await user_service.insert(req);
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = user_controller;