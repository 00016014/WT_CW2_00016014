// import specific service class
const user_service = require("../../services/");

const user_controller = {
    add_task: async (req, res) => {
        try {
            res.render("toDO_list.pug"); // Assuming there's a users.pug in the views directory
        } catch (error) {
            res.status(500).render("error", { error: error.message }); // Assuming there's an error.pug
        }
    },
};

module.exports = user_controller;
